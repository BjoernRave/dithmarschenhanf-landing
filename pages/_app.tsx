import Footer from 'components/Footer'
import Meta from 'components/Meta'
import Nav from 'components/Nav'
import TinaButton from 'components/TinaButton'
import { pageView } from 'lib/analytics'
import { GlobalStyles } from 'lib/styles'
import theme from 'lib/theme'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { TinaCMS, TinaProvider } from 'tinacms'

Router.events.on('routeChangeComplete', (url) => {
  pageView(url)
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const [cms] = useState(
    new TinaCMS({
      apis: {
        github: new GithubClient({
          proxy: '/api/proxy-github',
          authCallbackRoute: '/api/create-github-access-token',
          clientId: process.env.GITHUB_CLIENT_ID,
          baseRepoFullName: process.env.REPO_FULL_NAME,
        }),
      },
      enabled: pageProps.preview,
      sidebar: pageProps.preview,
      toolbar: pageProps.preview,
    })
  )

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={exitEditMode}
        error={pageProps.error}>
        <ThemeProvider theme={theme}>
          <Normalize />
          <GlobalStyles />
          <Meta />
          <Nav />
          {(router.query.edit || pageProps.preview) && <TinaButton cms={cms} />}
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </TinacmsGithubProvider>
    </TinaProvider>
  )
}

export default MyApp

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const response = await fetch(`/api/preview`, { headers })
  const data = await response.json()

  if (response.status === 200) {
    window.location.reload()
  } else {
    throw new Error(data.message)
  }
}

const exitEditMode = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export interface EditLinkProps {
  editMode: boolean
}
