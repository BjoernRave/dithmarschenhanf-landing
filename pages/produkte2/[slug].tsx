import { CartAdd } from '@styled-icons/boxicons-solid/CartAdd'
import EinkaufswagenModal from 'components/EinkaufswagenModal'
import Select from 'components/Select'
import { useShoppingCart } from 'components/ShoppingCart'
import { Get_ProductQuery, ListedProduct } from 'generated'
import gql from 'graphql-tag'
import { constructDimensionString, createVariantName } from 'lib/utils'
import { NextPage, NextPageContext } from 'next'
import { withUrqlClient } from 'next-urql'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
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
      weightUnit
      dimensions {
        id
        height
        width
        depth
      }
      material
      color
      weight
      listedInventories {
        id
        amount
        listPrice
      }
      variants {
        id
        slug
        description
        dimensions {
          id
          height
          width
          depth
        }
        material
        color
        weight
        listedInventories {
          id
          amount
          listPrice
        }
      }
      lengthUnit
      images {
        id
        url
      }
      currencySymbol
      description
    }
  }
`

const ProductWrapper = styled.div`
  margin: 20px;
`

const Title = styled.h1`
  display: table;
  margin: 20px auto 100px auto;
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

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const DescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const StyledSelect = styled(Select)`
  font-size: 24px;
  margin: 0 10px;
`

const Price = styled.span`
  font-size: 60px;
`

const Properties = styled.table`
  border: none;
  font-size: 20px;
  margin: 20px 0;
  th,
  td {
    border: none;
  }

  td {
    padding: 10px 40px;
  }

  td:nth-child(1) {
    font-weight: bold;
  }
`

const StyledCarousel = styled(ImageCarousel)`
  width: 40%;
  margin-top: 50px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter()
  const [amount, setAmount] = useState(1)
  const { addToCart } = useShoppingCart()
  const [isModal, setIsModal] = useState(false)
  const {
    description,
    images,
    name,
    variants,
    listedInventories,
    material,
    quantity,
    color,
    weight,
    dimensions,
    weightUnit,
    lengthUnit,
  } = product

  const handleAdd = () => {
    let left = amount

    for (const listedInventory of listedInventories) {
      if (left > 0) {
        addToCart({
          total: listedInventories.reduce(
            (prev, next) => prev + next.amount,
            0
          ),
          product,
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
        <StyledCarousel images={images.map((i) => i.url)} />
        <DescriptionWrapper>
          <Title>{name}</Title>
          <Price>{listedInventories[0].listPrice.toFixed(2)}€</Price>
          <StyledSelect
            label='Variante'
            onChange={(e) =>
              router.replace(
                `/produkte2/[slug]`,
                `/produkte2/${e.target.value}`
              )
            }
            value={product}
            options={[product, ...variants].map((variant) => ({
              value: variant.slug,
              label: createVariantName(
                variant,
                product.lengthUnit,
                product.weightUnit
              ),
            }))}
          />
          <BuySection>
            <StyledSelect
              label='Menge'
              options={new Array(
                listedInventories.reduce((prev, next) => prev + next.amount, 0)
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
          {(material || color || weight || dimensions || quantity) && (
            <Properties>
              <tbody>
                {material && (
                  <tr>
                    <td>Material:</td>
                    <td>{material}</td>
                  </tr>
                )}
                {color && (
                  <tr>
                    <td>Farbe:</td>
                    <td>{color}</td>
                  </tr>
                )}
                {weight && (
                  <tr>
                    <td>Gewicht:</td>
                    <td>
                      {weight}
                      {weightUnit}.
                    </td>
                  </tr>
                )}
                {dimensions && (
                  <tr>
                    <td>Abmaße:</td>
                    <td>{constructDimensionString(dimensions, lengthUnit)}</td>
                  </tr>
                )}
                {quantity && (
                  <tr>
                    <td>Menge:</td>
                    <td>{quantity} Stück</td>
                  </tr>
                )}
              </tbody>
            </Properties>
          )}
          <Description>
            <Markdown source={description} />
          </Description>
        </DescriptionWrapper>
      </ContentWrapper>
      {isModal && <EinkaufswagenModal onClose={() => setIsModal(false)} />}
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

  return { product: response?.data?.listedProduct as any }
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
