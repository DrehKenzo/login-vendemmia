import { CurrencyQuotation } from '../CurrencyQuotation'
import { Weather } from '../Weather'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <CurrencyQuotation coin1={'USD'} coin2={'BRL'} />
      </SummaryCard>

      <SummaryCard>
        <CurrencyQuotation coin1={'BRL'} coin2={'USD'} />
      </SummaryCard>

      <SummaryCard variant="green">
        <Weather />
      </SummaryCard>
    </SummaryContainer>
  )
}
