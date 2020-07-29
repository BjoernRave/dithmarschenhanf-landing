import { useShoppingCart } from 'components/ShoppingCart'
import React, { FC, useEffect } from 'react'

const EinkaufsErfolg: FC<Props> = ({}) => {
  const { setCart } = useShoppingCart()
  useEffect(() => {
    localStorage.removeItem('shopping-cart')
    setCart([])
  }, [])

  return <h1>Erfolg</h1>
}

export default EinkaufsErfolg

interface Props {}
