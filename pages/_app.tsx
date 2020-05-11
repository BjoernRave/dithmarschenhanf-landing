import Footer from 'components/Footer'
import Meta from 'components/Meta'
import Nav from 'components/Nav'
import TinaButton from 'components/TinaButton'
import { pageView } from 'lib/analytics'
import { GlobalStyles } from 'lib/styles'
import theme from 'lib/theme'
import { AppProps } from 'next/app'
import Router from 'next/router'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { TinaCMS, TinaProvider } from 'tinacms'

Router.events.on('routeChangeComplete', (url) => {
  pageView(url)
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const cms = new TinaCMS({
    apis: {
      github: new GithubClient({
        proxy: '/api/proxy-github',
        authCallbackRoute: '/api/create-github-access-token',
        clientId: process.env.GITHUB_CLIENT_ID,
        baseRepoFullName: process.env.REPO_FULL_NAME,
      }),
    },
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
          {(router.query.edit || pageProps.preview) && (
            <TinaButton editMode={pageProps.preview} />
          )}
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
