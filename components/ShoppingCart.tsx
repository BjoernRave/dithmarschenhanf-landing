import { ListedProduct } from 'generated'
import { useLocalStorage } from 'lib/utils'
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

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('shopping-cart', [])

  const addToCart = (cartItem: CartItem) => {
    const existingItem = cart.find((item) => item.id === cartItem.id)

    if (existingItem) {
      const newCart = Array.from(cart)

      newCart.splice(
        cart.findIndex((item) => item.id === cartItem.id),
        1
      )

      setCart([
        ...newCart,
        { ...cartItem, amount: existingItem.amount + cartItem.amount },
      ])
    } else {
      setCart([...cart, cartItem])
    }
  }

  const removeFromCart = (id: string) => {
    const newCart = Array.from(cart)

    newCart.splice(
      cart.findIndex((item) => item.id === id),
      1
    )

    setCart(newCart)
  }

  return (
    <ShoppinCartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </ShoppinCartContext.Provider>
  )
}
