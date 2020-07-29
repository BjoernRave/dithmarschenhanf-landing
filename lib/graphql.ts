import gql from 'graphql-tag'

export const CREATE_CHECKOUT = gql`
  mutation CREATE_CHECKOUT(
    $successUrl: String!
    $cancelUrl: String!
    $inventories: [StripeCheckoutInventory!]!
  ) {
    createOneCheckout(
      successUrl: $successUrl
      cancelUrl: $cancelUrl
      inventories: $inventories
    ) {
      checkoutId
      stripeAccountId
    }
  }
`
