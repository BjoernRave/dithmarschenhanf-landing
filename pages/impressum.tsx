import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { Description, PageWrapper, Title } from "../lib/styles";

const ImpressumWrapper = styled(PageWrapper)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled(Description)`
  margin-top: 50px;
  font-size: 24px;
`;

const Impressum: NextPage<Props> = ({}) => {
  return (
    <ImpressumWrapper>
      <Title>Impressum</Title>
      <Text>
        <b> Dithmarschenhanf</b>
        <br />
        Nis Thomassek
        <br />
        Ostermenghusen 1a
        <br />
        25724 Schmedeswurth
        <br />
        Deutschland
        <br />
        Email: info@dithmarschenhanf.de
      </Text>
    </ImpressumWrapper>
  );
};

export default Impressum;

interface Props {}
