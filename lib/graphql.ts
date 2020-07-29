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

export const UPLOAD_FILES = gql`
  mutation UPLOAD_FILES(
    $files: [Upload!]!
    $isPublic: Boolean!
    $name: String!
    $key: String!
  ) {
    createManyFiles(
      files: $files
      isPublic: $isPublic
      name: $name
      key: $key
    ) {
      id
      url
      name
    }
  }
`
