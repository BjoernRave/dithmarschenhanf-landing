import { loadStripe } from '@stripe/stripe-js'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
import CartItem from 'components/CartItem'
import { FooterHeight } from 'components/Footer'
import { NavHeight } from 'components/Nav'
import { useShoppingCart } from 'components/ShoppingCart'
import StripeLogo from 'components/StripeLogo'
import { CREATE_CHECKOUT } from 'lib/graphql'
import { Title } from 'lib/styles'
import { NextPage } from 'next'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import styled from 'styled-components'
import { useMutation } from 'urql'

const Wrapper = styled.div`
  margin: 10px 50px;
  min-height: calc(100vh - ${NavHeight}px - ${FooterHeight}px - 22px);
`

const ItemsWrapper = styled.ul``

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

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Total = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Einkaufswagen: NextPage<Props> = ({}) => {
  const { cart } = useShoppingCart()
  const [, createCheckout] = useMutation(CREATE_CHECKOUT)

  const handleCheckout = async () => {
    const response = await createCheckout({
      cancelUrl: 'http://localhost:3001/einkauf/fehler',
      successUrl: 'http://localhost:3001/einkauf/erfolg',
      products: cart.map((cartItem) => ({
        amount: cartItem.amount,
        id: cartItem.product.id,
      })),
    })

    const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY, {
      stripeAccount: response.data.createOneCheckout.stripeAccountId,
    })

    stripe.redirectToCheckout({
      sessionId: response.data.createOneCheckout.checkoutId,
    })
  }

  return (
    <Wrapper>
      <Title>Einkaufswagen</Title>
      <ItemsWrapper>
        {cart.map(({ product, amount }) => (
          <CartItem amount={amount} key={product.slug} product={product} />
        ))}
      </ItemsWrapper>

      <CheckoutWrapper>
        <Total>
          Gesamt:
          {cart.reduce(
            (prev, next) => prev + next.amount * next.product.listPrice,
            0
          )}{' '}
          €
        </Total>
        <CheckoutButton onClick={() => handleCheckout()}>
          Bezahlen
          <RightArrowAlt style={{ marginLeft: 5 }} size={36} />
        </CheckoutButton>
        <StripeLogo />
      </CheckoutWrapper>
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
