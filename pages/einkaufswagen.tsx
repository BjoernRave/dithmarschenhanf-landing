import { loadStripe } from '@stripe/stripe-js'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
import CartItem from 'components/CartItem'
import { FooterHeight } from 'components/Footer'
import Loader from 'components/Loader'
import { NavHeight } from 'components/Nav'
import { useShoppingCart } from 'components/ShoppingCart'
import StripeLogo from 'components/StripeLogo'
import { CREATE_CHECKOUT } from 'lib/graphql'
import { Title } from 'lib/styles'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useMutation } from 'urql'

const Wrapper = styled.div`
  margin: 10px 50px;
  min-height: calc(100vh - ${NavHeight}px - ${FooterHeight}px - 22px);

  @media (max-width: 767px) {
    margin: 10px 20px;
  }
`

const ItemsWrapper = styled.ul`
  padding: 0;
`

const CheckoutButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all linear 0.1s;
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  margin: 20px 0;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 767px) {
    align-items: center;
  }
`

const Total = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`

const InnerCheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const NoItemsWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const NoItemsTitle = styled.h2``

const Einkaufswagen: NextPage<Props> = ({}) => {
  const { cart } = useShoppingCart()
  const [isLoading, setIsLoading] = useState(false)
  const [, createCheckout] = useMutation(CREATE_CHECKOUT)

  const handleCheckout = async () => {
    setIsLoading(true)

    const baseUrl =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://dithmarschenhanf.de'

    const response = await createCheckout({
      cancelUrl: `${baseUrl}/einkaufswagen`,
      successUrl: `${baseUrl}/einkauf/erfolg`,
      inventories: cart.map((cartItem) => ({
        amount: cartItem.amount,
        id: cartItem.id,
      })),
    })

    if (response.error) {
      setIsLoading(false)
      return
    }

    const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY, {
      stripeAccount: response.data.createOneCheckout.stripeAccountId,
    })

    stripe.redirectToCheckout({
      sessionId: response.data.createOneCheckout.checkoutId,
    })
    setIsLoading(false)
  }

  return (
    <Wrapper>
      <Title>Einkaufswagen</Title>
      {cart.length > 0 ? (
        <>
          <ItemsWrapper>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.product.slug} cartItem={cartItem} />
            ))}
          </ItemsWrapper>
          <CheckoutWrapper>
            <InnerCheckoutWrapper>
              <Total>
                Gesamt:{' '}
                {cart
                  .reduce(
                    (prev, next) => prev + next.amount * next.listPrice,
                    0
                  )
                  .toFixed(2)}
                €
              </Total>
              <CheckoutButton onClick={() => handleCheckout()}>
                {isLoading ? (
                  <Loader color='white' />
                ) : (
                  <>
                    Bezahlen
                    <RightArrowAlt style={{ marginLeft: 5 }} size={36} />
                  </>
                )}
              </CheckoutButton>
              <StripeLogo />
            </InnerCheckoutWrapper>
          </CheckoutWrapper>
        </>
      ) : (
        <NoItemsWrapper>
          <NoItemsTitle>
            Ihr Einkaufswagen ist momentan leer. Gehen sie hier zu unseren
            Produkten
          </NoItemsTitle>
          <Link href='/produkte'>
            <a>
              <CheckoutButton>Zu den Produkten</CheckoutButton>
            </a>
          </Link>
        </NoItemsWrapper>
      )}
    </Wrapper>
  )
}

export default withUrqlClient(
  () => ({
    url: `${process.env.API_URL}/api/graphql`,
  }),
  { ssr: true }
)(Einkaufswagen)

interface Props {}
