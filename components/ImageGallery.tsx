import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

const ImageGalleryWrapper = styled.div`
  columns: 6 300px;
  column-gap: 1rem;
  img {
    border-radius: 10px !important;
  }
`

const ImageWrapper = styled.div`
  color: white;
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-family: system-ui;
  font-weight: 900;
  font-size: 2rem;
`

const ImageGallery: FC<Props> = ({ photos }) => {
  return (
    <ImageGalleryWrapper>
      {photos.map((image) => (
        <ImageWrapper>
          <Image
            src={image.src}
            height={image.height * 200}
            width={image.width * 200}
            alt='Dithmarschen'
          />
        </ImageWrapper>
      ))}
    </ImageGalleryWrapper>
  )
}

export default ImageGallery

interface Props {
  photos: any[]
}
