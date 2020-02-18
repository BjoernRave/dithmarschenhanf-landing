import { NextPage } from "next";
import React from "react";
import { Description, PageWrapper, Title } from "../lib/styles";

const DatenSchutz: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <Title>Datenschutzerklärung</Title>
      <Description>In Bearbeitung...</Description>
    </PageWrapper>
  );
};

export default DatenSchutz;

interface Props {}
