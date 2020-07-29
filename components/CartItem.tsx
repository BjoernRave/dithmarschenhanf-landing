import { XCircle } from '@styled-icons/boxicons-solid/XCircle'
import Select from 'components/Select'
import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import { CartItem as CartItemType, useShoppingCart } from './ShoppingCart'

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding-right: 20px;
  height: 150px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  font-size: 20px;
`

const ItemName = styled.span``

const ItemImage = styled.img`
  height: 150px;
  width: auto;
  margin-right: 10px;
  border-radius: 10px 0 0 10px;
`

const LeftImageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Price = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin: 0 20px;
`

const Numbers = styled.div`
  display: flex;
  align-items: center;
`

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const StyledX = styled(XCircle)`
  :hover {
    color: #d41638;
  }
  transition: all linear 0.1s;
`

const CartItem: FC<Props> = ({ cartItem }) => {
  const { removeFromCart, setCart, cart } = useShoppingCart()
  const { listPrice, id, name, amount, total, images, slug } = cartItem
  return (
    <ItemWrapper>
      <LeftImageWrapper>
        <ItemImage src={images[0]} alt={name} />
        <Link passHref href={`/produkte2/${slug}`}>
          <a>
            <ItemName>{name}</ItemName>
          </a>
        </Link>
      </LeftImageWrapper>
      <Numbers>
        <Select
          onChange={(e) => {
            const newCart = Array.from(cart)

            newCart.splice(
              cart.findIndex((c) => c.id === id),
              1
            )

            setCart([
              ...newCart,
              { ...cartItem, amount: Number(e.target.value) },
            ])
          }}
          value={amount}
          options={new Array(total).fill(0).map((v, ind) => ({
            value: ind + 1,
            label: String(ind + 1),
          }))}
        />
        <Price>{listPrice * amount}€</Price>
        <RemoveButton
          title='Artikel entfernen'
          onClick={() => removeFromCart(id)}>
          <StyledX size={40} />
        </RemoveButton>
      </Numbers>
    </ItemWrapper>
  )
}

export default CartItem

interface Props {
  cartItem: CartItemType
}
