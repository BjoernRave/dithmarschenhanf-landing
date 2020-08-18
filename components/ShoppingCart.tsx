import { ListedProduct } from 'generated'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface CartItem {
  amount: number
  total: number
  listPrice: number
  id: string
  product: Partial<ListedProduct>
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
