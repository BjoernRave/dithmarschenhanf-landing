import { PageWrapper } from 'lib/styles'
import { NextPage } from 'next'
import styled from 'styled-components'

const VerkaufsStellenWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const TextWrapper = styled.div``

const TextBlock = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin: 20px;
  flex-basis: 33.33%;

  @media (max-width: 767px) {
    text-align: center;
  }
`

const GooogleFrame = styled.iframe`
  width: 100%;
  flex-basis: 66.66%;
  min-height: 500px;

  @media (max-width: 767px) {
    height: 400px;
    flex-basis: unset;
  }
`

const VerkaufsStellen: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <h2 style={{ fontSize: '36px', textAlign: 'center' }}>Verkaufsstellen</h2>
      <VerkaufsStellenWrapper>
        <GooogleFrame src='https://www.google.com/maps/d/u/0/embed?mid=1xn6ZzHCOuPlj34-LGkDYucuQ3eEZY8dB&hl=de' />
        <TextWrapper>
          <TextBlock>
            Kleine Auszeit, <br /> Steinstraße 3, <br /> 25709 Marne <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='http://kleine-auszeit-marne.de'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>

          <TextBlock>
            Gemüsehof Krogmann, <br /> Hauptstraße 64, <br /> 25704 Nindorf{' '}
            <br />
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://www.hof-krogmann.de'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Heider Naturkost, <br /> Markt 7, <br /> 25746 Heide <br />
          </TextBlock>
          <TextBlock>
            Altfelder Hofladen, <br /> Altfelderweg 56, <br /> 25718
            Friedrichskoog <br />
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://www.altfelder-hofladen.de'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Schäferei Bährs, <br /> Neufelderkoog 25, <br /> 25724 Neufelderkoog{' '}
            <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://www.hof-baehrs.de/'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Hofgenuss Meinert, <br /> Kleine Kirchreihe 1, <br /> 25377 Kollmar{' '}
            <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://hofgenuss-meinert.de/'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Markttreff Delve <br />
            Zum Sportplatz 1, <br />
            25788 Delve <br />{' '}
          </TextBlock>
          <TextBlock>
            Die Diele <br />
            Hauptstr. 62 <br />
            25596 Wacken <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://diele-wacken.de/'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Lütt Wellness-Stuv <br />
            Kampweg 48 <br />
            25715 Eddelak <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='http://www.luett-wellness-stuv.de/'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
          <TextBlock>
            Hofladen Alte Mühle <br />
            Bundesstrasse 5 Nr 3 <br />
            25693 Trennewurth <br />{' '}
            <a
              style={{ color: '#0645ad', textDecoration: 'underline' }}
              href='https://www.hofladen-altemuehle.de'
              target='_blank'
              rel='noreferrer'>
              Website
            </a>
          </TextBlock>
        </TextWrapper>
      </VerkaufsStellenWrapper>
    </PageWrapper>
  )
}

export default VerkaufsStellen

interface Props {}
