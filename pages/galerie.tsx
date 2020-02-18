import { NextPage } from "next";
import React from "react";
import ImageGallery from "../components/ImageGallery";
import { photos } from "../lib/photos";
import { Description, PageWrapper, Title } from "../lib/styles";

const Galerie: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <Title>Impressionen aus Dithmarschen</Title>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Description>
      <ImageGallery photos={photos} />
    </PageWrapper>
  );
};

export default Galerie;

interface Props {}
