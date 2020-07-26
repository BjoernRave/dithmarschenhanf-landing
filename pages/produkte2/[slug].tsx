import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd'
import Select from 'components/Select'
import { useShoppingCart } from 'components/ShoppingCart'
import { Get_ProductQuery, ListedProduct } from 'generated'
import gql from 'graphql-tag'
import { NextPage, NextPageContext } from 'next'
import { withUrqlClient } from 'next-urql'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { OperationResult } from 'urql'

const ImageCarousel = dynamic(() => import('components/ImageCarousel'), {
  ssr: false,
})

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    listedProduct(where: { slug: $slug }) {
      id
      name
      slug
      images {
        id
        url
      }
      currencySymbol
      listPrice
      description
      amount
    }
  }
`

const ProductWrapper = styled.div`
  margin: 20px;
`

const Title = styled.h1`
  display: table;
  margin: 20px auto 50px auto;
  font-size: 45px;
`

const Description = styled.p`
  font-size: 20px;
`

const BuySection = styled.div`
  display: flex;
`

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all linear 0.1s;
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  font-size: 24px;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const ContentWrapper = styled.section`
  display: flex;
  margin-top: 20px;
`

const DescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

const Product: NextPage<Props> = ({ product }) => {
  const [amount, setAmount] = useState(1)
  const { addToCart } = useShoppingCart()
  const { description, images, name, slug } = product

  return (
    <ProductWrapper>
      <ContentWrapper>
        <ImageCarousel
          style={{ width: '40%', marginTop: 50 }}
          images={images.map((i) => i.url)}
        />
        <DescriptionWrapper>
          <Title>{name}</Title>
          <BuySection>
            <Select
              label='Menge'
              options={new Array(product.amount)
                .fill(0)
                .map((v, ind) => ({ value: ind + 1, label: String(ind + 1) }))}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <BuyButton onClick={() => addToCart(product, amount)}>
              In den Warenkorb
              <CartAdd size={40} style={{ marginLeft: 5 }} />
            </BuyButton>
          </BuySection>
          <Description>
            <Markdown source={description} />
          </Description>
        </DescriptionWrapper>
      </ContentWrapper>
    </ProductWrapper>
  )
}

export default withUrqlClient(
  () => ({
    url: `${process.env.API_URL}/api/graphql`,
  }),
  { ssr: true }
)(Product)

Product.getInitialProps = async ({ urqlClient, query }: NextPageContext) => {
  const response: OperationResult<Get_ProductQuery> = await urqlClient
    .query(GET_PRODUCT, { slug: query.slug as string })
    .toPromise()
  console.log(response)

  return { product: response?.data?.listedProduct }
}

// export async function getStaticProps({ params }) {
//   const product = products.find((product) => product.slug === params.slug)

//   return { props: { product } }
// }

// export async function getStaticPaths() {
//   const paths = products.map((product) => ({
//     params: { slug: product.slug },
//   }))

//   return { paths, fallback: false }
// }

interface Props {
  product: Partial<ListedProduct>
}
