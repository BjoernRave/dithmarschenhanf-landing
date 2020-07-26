const colors = {
  primary: '#01621f',
  secondary: '#336a89',
  warning: '#D41638',
  success: '#00D563',
  grey1: '#F7F7F7',
  grey2: '#F1F1F1',
  grey3: '#E4E4E4',
  grey4: '#CCC',
  grey5: '#B3B3B3',
  grey6: '#808080',
  grey7: '#4C4C4C',
  grey8: '#1D1D1D',
  facebook: '#4267b2',
  twitter: '#1da1f2',
  pinterest: '#e60023',
  whatsapp: '#00e676',
}

const boxShadows = {
  default: {
    google:
      '0 1px 2px 0 rgba(60,64,67,0.302),0 1px 3px 1px rgba(60,64,67,0.149)',
  },
  hover: {
    google:
      '0 1px 3px 0 rgba(60,64,67,0.302),0 4px 8px 3px rgba(60,64,67,0.149)',
  },
  normal: `
    0 0px 3.6px rgba(0, 0, 0, 0.048),
    0 0px 8.6px rgba(0, 0, 0, 0.069),
    0 0px 16.2px rgba(0, 0, 0, 0.085),
    0 0px 28.8px rgba(0, 0, 0, 0.101),
    0 0px 53.9px rgba(0, 0, 0, 0.122),
    0 0px 129px rgba(0, 0, 0, 0.17)
  `,
}

const borderRadius = {
  normal: '10px',
  strong: '20px',
}

export const theme = {
  colors,
  boxShadows,
  borderRadius,
}

export type colorType = typeof colors

export type colorInputType = keyof typeof colors

export type boxShadowsType = typeof boxShadows
export type borderRadiusType = typeof borderRadius

export default theme
