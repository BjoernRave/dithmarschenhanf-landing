import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd'
import Modal from 'components/Modal'
import Select from 'components/Select'
import { useShoppingCart } from 'components/ShoppingCart'
import { Get_ProductQuery, ListedProduct } from 'generated'
import gql from 'graphql-tag'
import { NextPage, NextPageContext } from 'next'
import { withUrqlClient } from 'next-urql'
import dynamic from 'next/dynamic'
import Link from 'next/link'
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
      listedInventories {
        id
        amount
        listPrice
      }
      description
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
  align-items: flex-end;
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

const StyledSelect = styled(Select)`
  font-size: 24px;
  margin: 0 10px;
`

const Price = styled.span`
  font-size: 48px;
`

const Product: NextPage<Props> = ({ product }) => {
  const [amount, setAmount] = useState(1)
  const { addToCart } = useShoppingCart()
  const [isModal, setIsModal] = useState(false)
  const { description, images, name, slug } = product

  const handleAdd = () => {
    let left = amount

    for (const listedInventory of product.listedInventories) {
      if (left > 0) {
        addToCart({
          images: product.images.map(({ url }) => url),
          name: product.name,
          total: product.listedInventories.reduce(
            (prev, next) => prev + next.amount,
            0
          ),
          slug: product.slug,
          id: listedInventory.id,
          listPrice: listedInventory.listPrice,
          amount:
            amount > listedInventory.amount ? listedInventory.amount : amount,
        })
        left = left - listedInventory.amount
      }
    }
    setIsModal(true)
  }

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
            <Price>{product.listedInventories[0].listPrice}€</Price>
            <StyledSelect
              label='Menge'
              options={new Array(
                product.listedInventories.reduce(
                  (prev, next) => prev + next.amount,
                  0
                )
              )
                .fill(0)
                .map((v, ind) => ({ value: ind + 1, label: String(ind + 1) }))}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <BuyButton onClick={() => handleAdd()}>
              In den Warenkorb
              <CartAdd size={40} style={{ marginLeft: 5 }} />
            </BuyButton>
          </BuySection>
          <Description>
            <Markdown source={description} />
          </Description>
        </DescriptionWrapper>
      </ContentWrapper>
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <Link href='/produkte2'>
            <a>
              <BuyButton>Zu den Produkten</BuyButton>
            </a>
          </Link>
          <Link href='/einkaufswagen'>
            <a>
              <BuyButton>Zum Warenkorb</BuyButton>
            </a>
          </Link>
        </Modal>
      )}
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
