import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import FAQ from "../components/FAQ";

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
  font-size: 36px;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <HomeWrapper>
        <Title>Willkommen in Dithmarschen, Willkommen im Hanf-Abenteuer</Title>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1xn6ZzHCOuPlj34-LGkDYucuQ3eEZY8dB&hl=de"
          width="640"
          height="480"
        />
        <FAQ />
      </HomeWrapper>
    </>
  );
};

export default Home;

interface Props {}
