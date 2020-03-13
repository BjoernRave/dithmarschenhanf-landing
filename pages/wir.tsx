import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { Description, PageWrapper, Title } from "../lib/styles";

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  display: table;
`;

const ImageWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const MiddleImage = styled(Image)`
  margin: 0 20px;

  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

const Wir: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <Title>Über Uns</Title>
      <ImageWrapper>
        <Image src="/nis.jpg" />
        <MiddleImage src="/wilm.jpg" />
        <Image src="/maren.jpg" />
      </ImageWrapper>
      <Description>
        Wir, das sind Nis mit Bruder Wilm und Mutter Maren Thomassek. Wir leben
        in Dithmarschen an der Nordsseküste Schleswig-Holsteins, halten seit
        Jahren Galloway-Rinder und haben 2019 erstmalig Nutzhanf ausgesät.
      </Description>
      <Description>
        Aus einer Idee am Küchentisch wurde ein Herzensprojekt.
        <br />
        Mit der Arbeit vieler fleißiger Hände ernteten wir den EU zugelassenen
        Nuthanf, angebaut nach EU Bio Richtlinien, denn wir sind ein
        Umstellungsbetrieb. Die Begeisterung wuchs mit den Planzen und das
        wollen wir gerne mit euch teilen!
      </Description>
    </PageWrapper>
  );
};

export default Wir;

interface Props {}
