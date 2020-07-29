import { X } from '@styled-icons/boxicons-regular/X'
import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  font-size: 30px;
  border: none;
  background-color: transparent;
  padding: 0;

  @media (max-width: 767px) {
    font-size: 40px;
  }
`

const ModalWrapper = styled.section<{ size?: Number }>`
  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
  padding: 20px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  background-color: white;
  width: ${({ size }) => (size ? `${size}%` : '80%')};
  max-height: 95vh;
  top: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  border-radius: 10px;
  max-width: 1280px;

  @media (max-width: 767px) {
    width: 95%;
    max-height: 90vh;
    margin: 0;
    margin-left: 2.5%;
  }
`

const Dimmer = styled.div`
  position: fixed;
  height: 200vh;
  width: 200vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 0;
  left: 0;
`

const Modal: FC<Props> = ({
  children,
  onClose,
  className,
  size,
  onClick,
  ...props
}) => {
  const Globals = createGlobalStyle`
    html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  `

  return (
    <>
      <Globals />
      <Dimmer
        onClick={() => {
          onClose()
        }}
      />
      <ModalWrapper
        {...props}
        size={size}
        onClick={onClick}
        className={className}>
        <div style={{ position: 'relative' }}>
          <CloseButton
            onClick={() => {
              onClose()
            }}>
            <X size={40} />
          </CloseButton>
          {children}
        </div>
      </ModalWrapper>
    </>
  )
}

export default Modal

interface Props {
  children: any
  onClose: () => void
  className?: string
  onClick?: () => void
  size?: Number
}
