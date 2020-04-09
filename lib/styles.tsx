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
`

export const Description = styled.p`
  font-size: 20px;
  line-height: 36px;
`

export const PageWrapper = styled.div`
  padding-top: 50px;
  padding: 0 10%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 0 10px;
  }
`
