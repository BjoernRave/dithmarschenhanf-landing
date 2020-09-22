import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import Modal from './Modal'

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all linear 0.1s;
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  font-size: 24px;
  margin: 0 20px;

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.hover.google};
  }
`

const Title = styled.h3`
  font-size: 36px;
  display: table;
  margin: 10px auto;
  padding-top: 30px;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`

const EinkaufswagenModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Title>Der Artikel ist in ihrem Warenkorb</Title>
      <Buttons>
        <Link href='/produkte'>
          <a>
            <BuyButton>Zu den Produkten</BuyButton>
          </a>
        </Link>
        <Link href='/einkaufswagen'>
          <a>
            <BuyButton>Zum Warenkorb</BuyButton>
          </a>
        </Link>
      </Buttons>
    </Modal>
  )
}

export default EinkaufswagenModal

interface Props {
  onClose: () => void
}
