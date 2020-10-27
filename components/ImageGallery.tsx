import Image from 'next/image'
import React, { FC, useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import styled from 'styled-components'

const ImageGalleryWrapper = styled.div`
  img {
    border-radius: 10px !important;
  }
`

const ImageGallery: FC<Props> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  console.log('photos', photos)
  return (
    <ImageGalleryWrapper>
      <Gallery margin={10} photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              components={{ View: (data) => <Image unsized {...data} /> }}
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                alt: 'Dithmarschen Bild',
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </ImageGalleryWrapper>
  )
}

export default ImageGallery

interface Props {
  photos: any[]
}
