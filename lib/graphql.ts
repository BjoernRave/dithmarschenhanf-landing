import gql from 'graphql-tag'

export const CREATE_CHECKOUT = gql`
  mutation CREATE_CHECKOUT(
    $successUrl: String!
    $cancelUrl: String!
    $products: [StripeCheckoutProduct!]!
  ) {
    createOneCheckout(
      successUrl: $successUrl
      cancelUrl: $cancelUrl
      products: $products
    ) {
      checkoutId
      stripeAccountId
    }
  }
`
