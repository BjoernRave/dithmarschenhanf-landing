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
  const [amount, setAmount] = useState(1)
  const { addToCart } = useShoppingCart()
  const [isModal, setIsModal] = useState(false)
  const { description, images, name, slug } = product
  const [activeVariantId, setActiveVariantId] = useState(product.variants[0].id)

  const activeVariant = product.variants.find((v) => v.id === activeVariantId)

  const handleAdd = () => {
    let left = amount

    for (const listedInventory of activeVariant.listedInventories) {
      if (left > 0) {
        addToCart({
          images: product.images.map(({ url }) => url),
          name: product.name,
          total: activeVariant.listedInventories.reduce(
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
        <StyledCarousel images={images.map((i) => i.url)} />
        <DescriptionWrapper>
          <Title>{name}</Title>
          <Price>
            {activeVariant.listedInventories[0].listPrice.toFixed(2)}€
          </Price>
          <StyledSelect
            label='Variante'
            onChange={(e) => setActiveVariantId(e.target.value)}
            value={activeVariantId}
            options={product.variants.map((variant) => ({
              value: variant.id,
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
                activeVariant.listedInventories.reduce(
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
          {(activeVariant.material ||
            activeVariant.color ||
            activeVariant.weight ||
            activeVariant.dimensions) && (
            <Properties>
              <tbody>
                {activeVariant.material && (
                  <tr>
                    <td>Material:</td>
                    <td>{activeVariant.material}</td>
                  </tr>
                )}
                {activeVariant.color && (
                  <tr>
                    <td>Farbe:</td>
                    <td>{activeVariant.color}</td>
                  </tr>
                )}
                {activeVariant.weight && (
                  <tr>
                    <td>Gewicht:</td>
                    <td>
                      {activeVariant.weight}
                      {product.weightUnit}.
                    </td>
                  </tr>
                )}
                {activeVariant.dimensions && (
                  <tr>
                    <td>Abmaße:</td>
                    <td>
                      {constructDimensionString(
                        activeVariant.dimensions,
                        product.lengthUnit
                      )}
                    </td>
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
