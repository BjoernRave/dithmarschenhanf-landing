import { products } from 'lib/products'
import { Product as ProductType } from 'lib/types'
import { NextPage } from 'next'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

const Haltbarkeit = styled.span`
  padding: 40px 0;
`

const Info = styled.span`
  color: #6c6c6c;
`

const ProductWrapper = styled.div`
  margin: 20px 20%;
`

const Title = styled.h1`
  display: table;
  margin: 20px auto;
  font-size: 45px;
`

const Description = styled.p`
  font-size: 20px;
`

const NutrientHeader = styled.h2``

const NutrientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Product: NextPage<Props> = ({ product }) => {
  const { description, images, name, slug, nutrients } = product

  return (
    <ProductWrapper>
      <Title>{name}</Title>
      <Carousel showThumbs={false} dynamicHeight={true}>
        {images.map((image, index) => (
          <img
            style={{ height: 400, width: 'auto' }}
            alt={`${name}_${index}`}
            src={image}
          />
        ))}
      </Carousel>
      <Description>{description}</Description>
      {product.mhd && (
        <Haltbarkeit>Mindesthaltbarkeitsdatum: {product.mhd}</Haltbarkeit>
      )}
      {nutrients && (
        <NutrientWrapper>
          <NutrientHeader>Nährwerte</NutrientHeader>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Wert</td>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((nutrient) => (
                <tr>
                  <td>{nutrient.name}</td>
                  <td>{nutrient.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Info>Nährwerte können natürlichen Schwankungen unterliegen</Info>
        </NutrientWrapper>
      )}
    </ProductWrapper>
  )
}

export default Product

export async function getStaticProps({ params }) {
  const product = products.find((product) => product.slug === params.slug)

  return { props: { product } }
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }))

  return { paths, fallback: false }
}

interface Props {
  product: ProductType
}
