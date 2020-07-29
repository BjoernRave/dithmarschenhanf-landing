import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface CartItem {
  name: string
  slug: string
  amount: number
  total: number
  listPrice: number
  id: string
  images: string[]
}

const initialValues: {
  cart: CartItem[]
  setCart: Dispatch<SetStateAction<CartItem[]>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
} = { setCart: null, cart: null, addToCart: null, removeFromCart: null }

export const ShoppinCartContext = createContext(initialValues)

export const useShoppingCart = () => useContext(ShoppinCartContext)

export const ShoppingCartProvider = ShoppinCartContext.Provider
