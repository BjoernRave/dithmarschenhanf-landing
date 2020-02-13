import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 30px auto 10px auto;
  display: table;
  text-align: center;
`;

const Kontakt = styled.span`
  margin: 0 auto;
  display: table;
`;

const Logo = styled.img`
  width: 40%;
  height: auto;
  display: table;
  margin: 0 auto;
`;

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Title>Die Website befindet sich gerade im Aufbau</Title>
      <Kontakt>
        Schreibt uns gerne unter{" "}
        <a href="mailto:info@dithmarschenhanf.de">info@dithmarschenhanf.de</a>
      </Kontakt>
      <Logo src="/logo.png" />
    </>
  );
};

export default Home;

interface Props {}
