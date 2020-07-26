import { ListedProduct } from 'generated'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface CartProduct {
  product: Partial<ListedProduct>
  amount: number
}

const initialValues: {
  cart: Partial<CartProduct>[]
  setCart: SetStateAction<Dispatch<CartProduct[]>>
  addToCart: (product: Partial<ListedProduct>, amount?: number) => void
  removeFromCart: (id: string) => void
} = { setCart: null, cart: null, addToCart: null, removeFromCart: null }

export const ShoppinCartContext = createContext(initialValues)

export const useShoppingCart = () => useContext(ShoppinCartContext)

export const ShoppingCartProvider = ShoppinCartContext.Provider
