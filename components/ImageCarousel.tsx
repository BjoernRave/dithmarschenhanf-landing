import Carousel, { arrowsPlugin, Dots } from '@brainhubeu/react-carousel'
import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import React, { CSSProperties, FC, useState } from 'react'
import styled from 'styled-components'

const ArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const ImageCarousel: FC<Props> = ({ images, ...props }) => {
  const [slide, setSlide] = useState(0)

  const imageTags = images.map((image, index) => (
    <img
      style={{ height: 400, width: 'auto' }}
      alt={`${name}_${index}`}
      src={image}
    />
  ))

  const thumbnailTags = images.map((image, index) => (
    <img
      style={{ height: 60, width: 'auto' }}
      alt={`${name}_${index}`}
      src={image}
    />
  ))

  return (
    <div {...props}>
      <Carousel
        value={slide}
        slides={imageTags}
        onChange={(val) => setSlide(Number(val))}
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <ArrowButton>
                  <ChevronLeft size={40} />
                </ArrowButton>
              ),
              arrowRight: (
                <ArrowButton>
                  <ChevronRight size={40} />
                </ArrowButton>
              ),
              addArrowClickHandler: true,
            },
          },
          'infinite',
        ]}
      />
      <Dots
        number={thumbnailTags.length}
        thumbnails={thumbnailTags}
        value={slide}
        onChange={(val) => setSlide(Number(val))}
      />
    </div>
  )
}

export default ImageCarousel

interface Props {
  images: string[]
  style?: CSSProperties
}
