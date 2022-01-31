import Loader from 'components/Loader'
import { GET_PRODUCTS } from 'lib/graphql'
import { Description, Title } from 'lib/styles'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Client } from 'urql'

const ProductsWrapper = styled.div`
  margin: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 767px) {
    margin: 20px;
  }
`

const ProductWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  height: 300px;
  width: 300px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const ProductImage = styled(Image)`
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const ProductName = styled.span`
  display: table;
  margin: auto;
  padding: 10px;
  font-size: 24px;
`

const StyledText = styled(Description)`
  display: table;
  margin: 10px auto;
  text-align: center;
`

const Products: NextPage<Props> = ({ listedProducts }) => {
  const groupedProducts = listedProducts?.reduce((prev, next) => {
    if (!prev[next.name]) {
      return { ...prev, [next.name]: [next] }
    } else {
      return { ...prev, [next.name]: [...prev[next.name], next] }
    }
  }, {})
  console.log('listedProducts', listedProducts)
  return (
    <>
      <Title>Produkte</Title>

      <ProductsWrapper>
        {groupedProducts ? (
          Object.keys(groupedProducts).map((groupedProduct) => {
            const { name, slug, images, id } =
              groupedProducts[groupedProduct][0]

            return (
              <Link key={id} href={`/produkte/${slug}`}>
                <ProductWrapper>
                  {images?.length > 0 && (
                    <ProductImage
                      width={300}
                      height={200}
                      alt='Produkt Bild'
                      src={images[0].url}
                    />
                  )}
                  <ProductName>{name}</ProductName>
                </ProductWrapper>
              </Link>
            )
          })
        ) : (
          <Loader />
        )}
      </ProductsWrapper>
    </>
  )
}

export default Products

interface Props {
  listedProducts: any[]
}

export async function getStaticProps() {
  const client = new Client({ url: `${process.env.API_URL}/api/graphql` })

  const response = await client.query(GET_PRODUCTS).toPromise()

  console.log('response', response)

  return {
    props: {
      listedProducts: response?.data ? response?.data?.listedProducts : null,
    },
    revalidate: 1,
  }
}
