import { XCircle } from '@styled-icons/boxicons-solid/XCircle'
import Select from 'components/Select'
import { ListedProduct } from 'generated'
import Link from 'next/Link'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useShoppingCart } from './ShoppingCart'

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
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
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

const CartItem: FC<Props> = ({ product, amount }) => {
  const { removeFromCart } = useShoppingCart()
  const { name, images, slug } = product

  return (
    <ItemWrapper>
      <LeftImageWrapper>
        <ItemImage src={images[0].url} alt={name} />
        <Link passHref href={`/produkte2/${slug}`}>
          <a>
            <ItemName>{name}</ItemName>
          </a>
        </Link>
      </LeftImageWrapper>
      <Numbers>
        <Select
          value={amount}
          label='Menge'
          options={new Array(product.amount).fill(0).map((v, ind) => ({
            value: ind + 1,
            label: String(ind + 1),
          }))}
        />
        <Price>{product.listPrice * amount}€</Price>
        <RemoveButton
          title='Artikel entfernen'
          onClick={() => removeFromCart(product.id)}>
          <StyledX size={40} />
        </RemoveButton>
      </Numbers>
    </ItemWrapper>
  )
}

export default CartItem

interface Props {
  product: Partial<ListedProduct>
  amount: number
}
