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
      <Head>
        <meta charSet='utf-8' />
        <link rel='shortcut icon' href='/logo_32.png' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>

        <title>{title}</title>

        {/* <script type='application/ld+json'>
          {
            ({
              '@id': 'https://www.hosco.com/en/',
              '@context': 'https://schema.org',
              '@type': 'Website',
              url: 'https://www.hosco.com/en/',
              name: 'Hosco',
              description:
                'We connect Talents, Companies \u0026 Schools around the globe. Search for Jobs, Make connections \ud83e\udd1d Get Hired \u2713 Join Hosco Today!',
              copyrightYear: 2011,
              image: 'https://www.hosco.com/images/home/hosco-blue@3x.png',
              dateCreated: '2011-10-11',
              alternateName: 'hospitality connection',
              sameAs: [
                'https://www.facebook.com/hospitalityconnection',
                'https://www.instagram.com/hoscoinstagram',
                'https://twitter.com/hoscoinfo',
                'https://www.linkedin.com/company/hosco',
                'https://www.youtube.com/channel/UCWO1YU4F7B_92kvyA55yAmg',
                'https://plus.google.com/+Hosco',
                'https://en.wikipedia.org/wiki/Hosco',
              ],
              about: {
                url: 'https://www.hosco.com/en/about-us/',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://www.hosco.com/en/directory/jobs?keywords={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hosco',
              url: 'https://www.hosco.com/en/',
              logo: 'https://www.hosco.com/dist/img/hosco-blue-margin@3x.png',
              foundingDate: '2011',
              founders: [
                {
                  '@type': 'Person',
                  name: 'Carl Julien',
                },
                {
                  '@type': 'Person',
                  name: 'Olivier Bracard',
                },
              ],
              sameAs: [
                'https://www.facebook.com/hospitalityconnection',
                'https://twitter.com/HOSCOInfo',
                'https://www.instagram.com/hoscojobs/',
                'https://www.youtube.com/channel/UCWO1YU4F7B_92kvyA55yAmg',
                'https://www.linkedin.com/company/hosco',
                'https://www.hosco.com/en/advice',
                'https://meet.hosco.com/',
              ],
            })
          }
        </script> */}
      </Head>
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
    </>
  )
}

export default Meta
