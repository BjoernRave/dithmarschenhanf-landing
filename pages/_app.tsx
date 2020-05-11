import Router from 'next/router'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  GithubClient,
  TinacmsGithubProvider,
  useGithubEditing,
} from 'react-tinacms-github'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { TinaCMS, TinaProvider } from 'tinacms'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import { pageView } from '../lib/analytics'
import { GlobalStyles } from '../lib/styles'
import theme from '../lib/theme'

Router.events.on('routeChangeComplete', (url) => {
  pageView(url)
})

const MyApp = ({ Component, pageProps }) => {
  const cms = new TinaCMS({
    apis: {
      /**
       * 2. Register the GithubClient
       */
      github: new GithubClient({
        proxy: '/api/proxy-github',
        authCallbackRoute: '/api/create-github-access-token',
        clientId: process.env.GITHUB_CLIENT_ID,
        baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
      }),
    },
    /**
     * 3. Hide the Sidebar & Toolbar
     *    unless we're in Preview/Edit Mode
     */
    sidebar: {
      hidden: !pageProps.preview,
    },
    toolbar: {
      hidden: !pageProps.preview,
    },
  })

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        editMode={pageProps.preview}
        enterEditMode={enterEditMode}
        exitEditMode={exitEditMode}
        error={pageProps.error}>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyles />
          <Meta />
          <Nav />
          <EditLink editMode={pageProps.preview} />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </TinacmsGithubProvider>
    </TinaProvider>
  )
}

export default MyApp

const enterEditMode = () => {
  return fetch(`/api/preview`).then(() => {
    window.location.href = window.location.pathname
  })
}

const exitEditMode = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export interface EditLinkProps {
  editMode: boolean
}

export const EditLink = ({ editMode }: EditLinkProps) => {
  const github = useGithubEditing()

  return (
    <button onClick={editMode ? github.exitEditMode : github.enterEditMode}>
      {editMode ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  )
}
