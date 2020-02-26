import { FC } from "react";
import styled from "styled-components";

const VerkaufsStellenWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div``;

const TextBlock = styled.p`
  font-size: 24px;
  line-height: 36px;
  margin: 20px;
  flex-basis: 33.33%;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const GooogleFrame = styled.iframe`
  width: 100%;
  flex-basis: 66.66%;

  @media (max-width: 767px) {
    height: 400px;
    flex-basis: unset;
  }
`;

const VerkaufsStellen: FC<Props> = ({}) => {
  return (
    <>
      <h2 style={{ fontSize: "36px", textAlign: "center" }}>Verkaufsstellen</h2>
      <VerkaufsStellenWrapper>
        <GooogleFrame src="https://www.google.com/maps/d/u/0/embed?mid=1xn6ZzHCOuPlj34-LGkDYucuQ3eEZY8dB&hl=de" />
        <TextWrapper>
          <TextBlock>
            Kleine Auszeit, <br /> Steinstraße 3, <br /> 25709 Marne
          </TextBlock>
          <TextBlock>Weitere Verkaufsstellen folgen in Kürze...</TextBlock>
          <TextBlock>Außerdem ist ein Online Shop in Planung.</TextBlock>
        </TextWrapper>
      </VerkaufsStellenWrapper>
    </>
  );
};

export default VerkaufsStellen;

interface Props {}
