import { Dimension, ListedProduct } from 'generated'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const isServer = typeof window === 'undefined'

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: !isServer ? window.innerWidth : initialWidth,
    height: !isServer ? window.innerHeight : initialHeight,
  })

  useEffect((): (() => void) | void => {
    if (!isServer) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handler)

      return () => {
        window.removeEventListener('resize', handler)
      }
    }
  }, [])

  return state
}

export default useWindowSize

export const useLocalStorage = <S>(
  key: string,
  initialValue?: S
): [S, Dispatch<SetStateAction<S>>] => {
  const [storedValue, setStoredValue] = useState<S>(() => {
    try {
      const item = !isServer && window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)

      return initialValue
    }
  })

  const setValue = (value: S) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export const formatDate = (date: Date | string) => {
  const dateTimeFormat = new Intl.DateTimeFormat('de', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

  const [
    { value: day },
    ,
    { value: month },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(
    typeof date === 'string' ? new Date(date) : date
  )
  return `${day}.${month}${year}`
}

export const getObjectKeyByString = (o: any, s: string) => {
  s = s.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
  s = s.replace(/^\./, '') // strip a leading dot
  const a = s.split('.')
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i]
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}

export const constructDimensionString = (
  dimensions: Partial<Dimension>,
  lengthUnit: string
) => {
  if (!dimensions.width && !dimensions.depth) {
    return `${dimensions.height}${lengthUnit}.`
  }

  if (!dimensions.depth) {
    return `${dimensions.height}x${dimensions.width}${lengthUnit}.`
  }

  return `${dimensions.height}x${dimensions.width}x${dimensions.depth}${lengthUnit}.`
}

export const createVariantName = (
  variant: Partial<ListedProduct>,
  lengthUnit: string,
  weightUnit: string
) => {
  const variantName = []

  if (variant.color) {
    variantName.push(variant.color)
  }

  if (variant.dimensions) {
    variantName.push(constructDimensionString(variant.dimensions, lengthUnit))
  }

  if (variant.material) {
    variantName.push(variant.material)
  }

  if (variant.weight) {
    variantName.push(`${variant.weight}${weightUnit}.`)
  }

  if (variant.quantity) {
    variantName.push(`${variant.quantity} Stück`)
  }

  return (
    variantName.join(' - ') +
    `  ${variant.listedInventories[0].listPrice}${variant.currencySymbol}`
  )
}
