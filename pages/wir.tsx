import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import { Description, PageWrapper, Title } from "../lib/styles";

const Image = styled.img`
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  display: table;
`;

const VerticalImage = styled.img`
  margin: 20px auto;
  border-radius: 10px;
  display: table;
  height: 500px;
  margin-right: 20px;
`;

const MarenSection = styled.div`
  display: flex;
`;

const Wir: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <Title>Über Uns</Title>
      <Image src="/wir1.jpg" />
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
      <MarenSection>
        <VerticalImage src="/wir2.jpg" />
        <Description>
          <q style={{ fontStyle: "italic" }}>
            Mach alles was du tust, so gut du kannst und bleib dir selbst und
            deinen Werten dabei treu!
          </q>
          {"   "}
          - Das war und ist mein Lebenscredo.
          <br />
          <br />
          Nach meinem Biologie-Studium und langjähriger Erfahrung in der
          Qualitätssicherung Lebensmittelproduktion widme ich mich nun meiner
          kleinen Landwirtschaft. Neben der Galloway-Haltung säte ich erstmalig
          2019 mit meinen erwachsenen Söhnen eine kleine Fläche Nutzhanf auf
          unseren ökologisch bewirtschaftenten Flächen an. Und siehe da: In der
          Frische der deutschen Nordseeküste gedeihen nicht nur
          Salzwiesen-Lämmer und Millionen Kohlköpfe sondern auch eine der
          ältesten Kulturpflanzen der Menschheit: Nutzhanf. Die Begeisterung
          wuchs mit den Pflanzen. Es gibt noch viel zu lernen, wir fangen erst
          an!{" "}
        </Description>
      </MarenSection>
    </PageWrapper>
  );
};

export default Wir;

interface Props {}
