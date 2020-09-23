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

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    listedProducts {
      id
      name
      slug
      dimensions {
        id
        height
        width
        depth
      }
      material
      color
      weight
      quantity
      images {
        id
        url
      }
    }
  }
`

export const GET_PRODUCT = gql`
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
        currencySymbol
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
