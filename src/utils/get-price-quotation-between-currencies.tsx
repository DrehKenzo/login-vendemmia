export async function getPriceQuotationBetweenCurrencies(
  coin1: string,
  coin2: string,
) {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/${coin1}-${coin2}/1?format=json`,
  )
  const currency = await response.json()

  return currency
}
