import { useEffect, useState } from 'react'
import { getPriceQuotationBetweenCurrencies } from '../../utils/get-price-quotation-between-currencies'
import { CurrencyContainer } from './styles'
import { CurrencyCircleDollar } from 'phosphor-react'
import { priceFormatterBRL, priceFormatterUSD } from '../../utils/formatter'

interface CurrencyQuotationProps {
  coin1: string
  coin2: string
}

interface CurrencyProps {
  ask: string
  bid: string
  code: string
  codein: string
  create_date: string
  high: string
  low: string
  name: string
  pctChange: string
  timestamp: string
  varBid: string
}

export const CurrencyQuotation = (props: CurrencyQuotationProps) => {
  const { coin1, coin2 } = props
  const [currency, setCurrency] = useState<CurrencyProps[] | null>(null)

  useEffect(() => {
    const fetchCurrencyPrice = async () => {
      try {
        const response = await getPriceQuotationBetweenCurrencies(coin1, coin2)

        // Currency formatting
        if (coin1 === 'USD') {
          response[0].bid = priceFormatterUSD.format(Number(response[0].bid))
        } else {
          response[0].bid = priceFormatterBRL.format(Number(response[0].bid))
        }

        setCurrency(response)
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            'Error while fetching the currency quotation:',
            error.message,
          )
        }
      }
    }
    fetchCurrencyPrice()
  }, [coin1, coin2])

  return (
    <CurrencyContainer>
      <header>
        <span>
          Cotação {coin1}/{coin2}
        </span>
        <CurrencyCircleDollar size={32} color="#00b37e" />
      </header>
      <strong>{currency !== null ? `${currency[0].bid}` : 'loading..'}</strong>
      <span>{currency !== null ? `${currency[0].name}` : 'loading..'}</span>
    </CurrencyContainer>
  )
}
