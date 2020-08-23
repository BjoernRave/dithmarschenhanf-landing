import { DefaultSeo, LocalBusinessJsonLd, LogoJsonLd } from 'next-seo'
import Head from 'next/head'
import { FC } from 'react'

export const baseUrl = 'https://dithmarschenhanf.de'

const Meta: FC = () => {
  const title = 'Dithmarschenhanf'

  const description =
    'Dithmarschenhanf ist ein junges Projekt, welches Hanf als Nutzprodukt neu entdeckt und neu erfindet. Wir bauen den Nutzhanf auf unserem eigenen Feld an.'

  const logo = `${baseUrl}/logoCircle.png`

  return (
    <>
      <LogoJsonLd logo={logo} url={baseUrl} />
      <LocalBusinessJsonLd
        name={title}
        images={[logo]}
        type='Store'
        id={baseUrl}
        url={baseUrl}
        description={description}
        geo={{
          latitude: '53.935109',
          longitude: '9.047654',
        }}
        address={{
          addressCountry: 'Deutschland',
          postalCode: '25724',
          addressRegion: 'Schleswig-Holstein',
          addressLocality: 'Schmedeswurth',
          streetAddress: 'Ostermenghusen 1a',
        }}
      />
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'de_DE',
          site_name: 'Dithmarschenhanf',
          description,
          title,
          url: baseUrl,
          images: [
            {
              url: logo,
              alt: 'Dithmarschenhanf Logo',
              height: 1050,
              width: 1052,
            },
          ],
        }}
        title={title}
        description={description}
      />
      <Head>
        <meta charSet='utf-8' />
        <link rel='shortcut icon' href='/logo_32.png' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>

        <title>{title}</title>

        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  )
}

export default Meta
