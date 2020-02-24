import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
`;

const Answer = styled.p`
  font-size: 20px;
  line-height: 36px;
`;

const FAQ: FC<Props> = ({}) => {
  return (
    <Wrapper>
      <Title>Ist das legal?</Title>
      <Answer>
        Ja, das ist total legal! <br /> Der Anbau von Nutzhanf unterliegt in
        Deutschland strengen Kriterien, der Anbau muss beim Bundesministerium
        für Landwirtschaft und Ernährung angezeigt und genehmigt werden.
        Ausgesät im Freiland (und nur dort) dürfen ausnahmlos nur EU zugelassene
        Nutzhanfsorten mit einem maximalen THC Gehalt von 0,2% in getrockneten,
        reifen Pflanzenteilen. Die Einhalltung der Grenzwerte wird jährlich
        überprüft.
      </Answer>
      <Title>Wo werden die Produkte angebaut und hergestellt?</Title>
      <Answer>
        Dithmarschen Hanf ... das ist in im Norden Deutschlands, in
        Schleswig-Holstein, so ca. 80 km nördlich von Hamburg (nein, da ist
        nicht schon Dänemark!?) da, wo die Elbe sich in die Nordsee ergießt, wo
        es eigentlich immer windig ist - aber das macht den Kopf auch frei...
      </Answer>
    </Wrapper>
  );
};

export default FAQ;

interface Props {}
