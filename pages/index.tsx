import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import FAQ from '../components/FAQ'
import { Description, PageWrapper } from '../lib/styles'

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
  font-size: 36px;
`

const TopBanner = styled.img`
  width: 100%;

  @media (max-width: 767px) {
    width: 250%;
  }
`
const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  height: 400px;
  margin: 0 50px;
  width: auto;

  @media (max-width: 767px) {
    margin: 20px 0;
  }
`

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <TopBanner alt='Hanffeld' src='/Header.jpg' />
      <PageWrapper>
        <Title>
          Willkommen bei Dithmarschenhanf, Willkommen im Hanf-Abenteuer
        </Title>
        <Description style={{ fontSize: '22px', textAlign: 'center' }}>
          Schön, dass Sie vorbeischauen! Wenn Sie möchten, laden wie Sie gerne
          ein, an unserem Abenteuer und unseren Produkten teilzuhaben
        </Description>
        <Images>
          <Image src='/samen.png' />
          <Image src='/teetasse.png' />
        </Images>
        <FAQ />
      </PageWrapper>
    </>
  )
}

export default Home

interface Props {}
