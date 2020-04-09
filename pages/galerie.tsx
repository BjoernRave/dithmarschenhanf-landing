import { NextPage } from 'next'
import React from 'react'
import ImageGallery from '../components/ImageGallery'
import { photos } from '../lib/photos'
import { Description, PageWrapper, Title } from '../lib/styles'

const Galerie: NextPage<Props> = ({}) => {
  return (
    <PageWrapper>
      <Title>Impressionen aus Dithmarschen</Title>
      <Description style={{ padding: '0 10px' }}>
        Dithmarschen - ein Landkreis in Schleswig-Holstein, dem nördlichsten
        Bundesland Deutschlands. Geprägt von der Nordseeküste, dem Wattenmeer
        und dem Geestland. Hier gedeihen nicht nur unzählige Salzwiesenlämmer,
        Kohlköpfe und unsere kleine Gallowayherde, sondern auch eine der
        ältesten Kulturpflanzen der Menschheit:
        <b> Hanf</b>.
      </Description>
      <ImageGallery photos={photos} />
    </PageWrapper>
  )
}

export default Galerie

interface Props {}
