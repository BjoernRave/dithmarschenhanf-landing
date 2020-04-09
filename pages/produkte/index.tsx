import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { products } from '../../lib/products'
import { Description, Title } from '../../lib/styles'

const ProductsWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  margin: 20px 50px;
`

const ProductWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  height: 400px;
  width: 300px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const ProductImage = styled.img`
  max-width: 300px;
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
`

const Products: NextPage<Props> = ({}) => {
  return (
    <>
      <Title>Produkte</Title>
      <StyledText>
        Diese Produkte können wir Ihnen derzeit anbieten, bei Interesse nehmen
        Sie gerne <a href='mailto:info@dithmarschenhanf.de'>Kontakt</a> zu uns
        auf.
      </StyledText>
      <ProductsWrapper>
        {products.map((product) => (
          <Link key={product.slug} href={`/produkte/${product.slug}`}>
            <ProductWrapper>
              <ProductImage src={product.images[0]} />
              <ProductName>{product.name}</ProductName>
            </ProductWrapper>
          </Link>
        ))}
      </ProductsWrapper>
    </>
  )
}

export default Products

interface Props {}
