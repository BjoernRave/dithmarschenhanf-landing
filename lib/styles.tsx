import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    font-family: "Roboto";
    overflow-x: hidden;
  }

`;

export const Title = styled.h1`
  display: table;
  margin: 20px auto;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 36px;
`;

export const PageWrapper = styled.div`
  padding-top: 50px;
  margin: 0 10%;

  @media (max-width: 767px) {
    margin: 0 10px;
  }
`;
