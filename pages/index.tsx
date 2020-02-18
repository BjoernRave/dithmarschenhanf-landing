import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
`;

const TopBanner = styled.img`
  margin-top: 40px;
  width: 100%;

  @media (max-width: 767px) {
    width: 250%;
  }
`;

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <TopBanner alt="Hanffeld" src="/Header.jpg" />
      <Title>Willkommen in Dithmarschen, Willkommen im Hanf-Abenteuer! </Title>
    </>
  );
};

export default Home;

interface Props {}
