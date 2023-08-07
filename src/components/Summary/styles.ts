import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: grid;
  flex-wrap: wrap;
  gap: 3.2rem;

  margin-top: -8rem;

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 3.2rem;
  color: ${({ theme }) => theme.white};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    font-size: 2.9rem;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-top: 1.8rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
