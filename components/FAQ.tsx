import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px 0;
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
        Deutschland strengen Kriterien, er muss beim Bundesministerium für
        Landwirtschaft und Ernährung angezeigt und genehmigt werden. Es dürfen
        dürfen ausnahmslos EU zugelassene Nutzhanfsorten im Freiland (und nur
        dort) ausgesät werden, welche den maximalen THC Gehalt von > 0,2% in
        getrockneten, reifen Pflanzenteilen nicht überschreiten. Die Einhalltung
        der Grenzwerte wird jährlich überprüft.
      </Answer>
    </Wrapper>
  );
};

export default FAQ;

interface Props {}
