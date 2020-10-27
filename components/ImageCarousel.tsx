import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import { useEmblaCarousel } from 'embla-carousel/react'
import Image from 'next/image'
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    margin-left: -10px;
  }

  .embla__slide {
    position: relative;
    padding-left: 10px;
    min-width: 100%;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    height: 400px;
    display: flex;
    justify-content: center;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    height: 400px;
    width: auto;
  }

  .embla--thumb {
    padding-top: 0;
    margin-top: 10px;
  }

  .embla__container--thumb {
    cursor: default;
    margin-left: -8px;
  }

  .embla__slide--thumb {
    padding-left: 8px;
    min-width: 20%;
  }

  .embla__slide__inner--thumb {
    touch-action: manipulation;
    cursor: pointer;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    height: 100px;
    width: 100%;
    background-color: transparent;
    position: relative;
    display: block;
    overflow: hidden;
  }

  .embla__slide__thumbnail {
    position: absolute;
    opacity: 0.2;
    top: 0;
    bottom: 0;
    left: -10000%;
    right: -10000%;
    margin: auto;
    min-width: 1000%;
    min-height: 1000%;
    max-width: none;
    transform: scale(0.1);
    transition: opacity 0.2s;
  }

  .embla__slide--thumb.is-selected .embla__slide__thumbnail {
    opacity: 1;
  }
`

const ArrowButton = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
`

const NextButton = styled(ArrowButton)`
  right: -30px;
`

const PrevButton = styled(ArrowButton)`
  left: -30px;
`

const CarouselWrapper = styled.div``

const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? 'is-selected' : ''
    }`}>
    <button
      onClick={onClick}
      className='embla__slide__inner embla__slide__inner--thumb'
      type='button'>
      <Image
        unsized
        className='embla__slide__thumbnail'
        src={imgSrc}
        alt='A cool cat.'
      />
    </button>
  </div>
)

const ImageCarousel: FC<Props> = ({ images, name, ...props }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    containScroll: 'keepSnaps',
  })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaCarouselRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    selectedClass: '',
    draggable: false,
  })

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index)
    },
    [embla, emblaThumbs]
  )

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return
    setSelectedIndex(embla.selectedScrollSnap())
    emblaThumbs.scrollTo(embla.selectedScrollSnap())
  }, [embla, emblaThumbs, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  return (
    <div
      {...props}
      style={{ padding: '0 30px', boxSizing: 'border-box', ...props?.style }}>
      <Wrapper>
        <div style={{ overflow: 'hidden' }} className='embla' ref={emblaRef}>
          <div className='embla__container'>
            {images.map((image, index) => (
              <div className='embla__slide' key={index}>
                <div className='embla__slide__inner'>
                  <Image
                    width={500}
                    height={400}
                    className='embla__slide__img'
                    src={image}
                    alt={name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='embla embla--thumb'>
          <div
            style={{ overflow: 'hidden' }}
            ref={emblaCarouselRef}
            className='embla__viewport'>
            <div className='embla__container embla__container--thumb'>
              {images.map((image, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  imgSrc={image}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <NextButton onClick={() => scrollNext()}>
          <ChevronRight />
        </NextButton>
        <PrevButton onClick={() => scrollPrev()}>
          <ChevronLeft />
        </PrevButton>
      </Wrapper>
    </div>
  )
}

export default ImageCarousel

interface Props {
  images: string[]
  style?: CSSProperties
  name: string
}
