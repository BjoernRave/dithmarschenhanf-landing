import 'next'
import 'styled-components'
import { Client as UrqlClient } from 'urql'
import { borderRadiusType, boxShadowsType, colorType } from './theme'

declare module 'next' {
  export interface NextPageContext {
    urqlClient: UrqlClient
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colorType
    boxShadows: boxShadowsType
    borderRadius: borderRadiusType
  }
}

interface Nutrient {
  name: string
  value: string
}

export interface Product {
  name: string
  slug: string
  images: string[]
  description: string
  nutrients?: Nutrient[]
  mhd?: string
}

export interface EditLinkProps {
  editMode: boolean
}
