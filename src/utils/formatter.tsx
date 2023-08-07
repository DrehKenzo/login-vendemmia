export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatterUSD = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
})

export const priceFormatterBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
