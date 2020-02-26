import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import FAQ from "../components/FAQ";
import VerkaufsStellen from "../components/Verkaufssstellen";
import { Description, PageWrapper } from "../lib/styles";

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
  font-size: 36px;
`;

const TopBanner = styled.img`
  width: 100%;

  @media (max-width: 767px) {
    width: 250%;
  }
`;

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <TopBanner alt="Hanffeld" src="/Header.jpg" />
      <PageWrapper>
        <Title>Willkommen in Dithmarschen, Willkommen im Hanf-Abenteuer</Title>
        <Description style={{ fontSize: "22px" }}>
          Schön, dass Sie vorbeischauen! Wenn Sie möchten, laden wie Sie gerne
          ein, an unserem Abenteuer und unseren Produkten teilzuhaben
        </Description>
        <VerkaufsStellen />
        <FAQ />
      </PageWrapper>
    </>
  );
};

export default Home;

interface Props {}
