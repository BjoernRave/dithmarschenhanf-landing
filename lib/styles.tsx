import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    font-family: "Roboto"
  }

  .headroom-wrapper {
    position: absolute;
  }
`;

export const Title = styled.h1`
  display: table;
  margin: 0 auto;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 36px;
`;

export const PageWrapper = styled.div`
  padding-top: 120px;
  margin: 0 10%;
`;
