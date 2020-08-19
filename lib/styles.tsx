import { FooterHeight } from 'components/Footer'
import { NavHeight } from 'components/Nav'
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

body {
    font-family: "Roboto";
    overflow-x: hidden;
  }

  table, th, td {
  border: 1px solid black;
}

td {
  padding: 5px;
}




`

export const Title = styled.h1`
  display: table;
  margin: 20px auto;
  text-align: center;
  font-size: 48px;

  @media (max-width: 767px) {
    font-size: 36px;
  }
`

export const Description = styled.span`
  font-size: 20px;
  line-height: 36px;
`

export const PageWrapper = styled.div`
  padding-top: 50px;
  padding: 0 10%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - ${NavHeight}px - ${FooterHeight}px - 22px);

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`
