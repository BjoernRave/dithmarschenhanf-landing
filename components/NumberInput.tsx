import React, { FC } from 'react'
import styled from 'styled-components'

const AmountInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  box-shadow: ${({ theme }) => theme.boxShadows.default.google};
`

const NumberInput: FC<Props> = ({ value, onChange, max, ...props }) => {
  return (
    <AmountInput
      {...props}
      value={value}
      inputMode='numeric'
      type='text'
      pattern='[0-9]*'
      onChange={(e) => {
        if (max && Number(e.target.value) > max) {
          return onChange(max)
        }

        onChange(Number(e.target.value))
      }}
      onKeyDown={(e) => {
        //delete, tab, etc
        if ([8, 9, 37, 39].includes(e.keyCode)) {
          return
        }

        //number keys
        if (e.keyCode >= 48 && e.keyCode <= 57) {
          return
        }

        //numpad
        if (e.keyCode >= 96 && e.keyCode <= 105) {
          return
        }

        e.preventDefault()
      }}
    />
  )
}

export default NumberInput

interface Props {
  value: number
  onChange: (value: number) => void
  max?: number
}
