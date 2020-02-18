import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import ImageGallery from "../components/ImageGallery";
import { photos } from "../lib/photos";
import { Description, Title } from "../lib/styles";

const GalerieWrapper = styled.div`
  padding-top: 200px;
  margin: 0 10%;

  img {
    border-radius: 10px !important;
  }
`;

const Galerie: NextPage<Props> = ({}) => {
  return (
    <GalerieWrapper>
      <Title>Impressionen aus Dithmarschen</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Description>
      <ImageGallery photos={photos} />
    </GalerieWrapper>
  );
};

export default Galerie;

interface Props {}
