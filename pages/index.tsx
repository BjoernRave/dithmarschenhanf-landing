import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
`;

const TopBanner = styled.img`
  margin-top: 60px;
  width: 100%;
`;

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <TopBanner src="/Header.jpg" />
      <Title>Willkommen in Dithmarschen, Willkommen im Hanf-Abenteuer! </Title>
    </>
  );
};

export default Home;

interface Props {}
