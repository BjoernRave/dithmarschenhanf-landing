import { products } from 'lib/products'
import { Description, Title } from 'lib/styles'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { withUrqlClient } from 'next-urql'
import gql from 'graphql-tag'
import { useMutation, useQuery } from 'urql'
import { useGet_ProductsQuery } from 'generated'

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    listedProducts {
      id
      name
      slug
      listPrice
      currencySymbol
      images {
        id
        url
      }
    }
  }
`

const ProductsWrapper = styled.div`
  margin: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const ProductImage = styled.img`
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

const Products: NextPage<Props> = ({}) => {
  const [{ data, error }] = useGet_ProductsQuery()
  console.log(data)
  console.log(error)

  return (
    <>
      <Title>Produkte</Title>
      <StyledText>
        Diese Produkte können wir Ihnen derzeit anbieten. Bei Interesse nehmen
        Sie gerne <a href='mailto:info@dithmarschenhanf.de'>Kontakt</a> zu uns
        auf.
      </StyledText>
      <ProductsWrapper>
        {data?.listedProducts.map(({ name, slug, images, id }) => (
          <Link key={id} href={`/produkte2/${slug}`}>
            <ProductWrapper>
              <ProductImage alt='Produkt Bild' src={images[0].url} />
              <ProductName>{name}</ProductName>
            </ProductWrapper>
          </Link>
        ))}
      </ProductsWrapper>
    </>
  )
}

export default withUrqlClient(
  () => ({
    url: 'http://localhost:3000/api/graphql',
  }),
  { ssr: true }
)(Products)

interface Props {}
