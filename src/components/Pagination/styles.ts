import { styled } from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 3.4rem auto;
  padding: 0 2.4rem;

  display: flex;
  justify-content: center;

  section,
  div {
    display: flex;
    gap: 1rem;
  }

  section {
    flex-direction: column;
    align-items: center;
  }

  select {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    border: 0;
    padding: 0 1.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    border: 0;
    padding: 0.3rem 0.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    line-height: 1.5rem;

    &:hover {
      background: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }

    &[data-state='checked'] {
      background: ${({ theme }) => theme['green-700']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    section {
      flex-direction: initial;
      align-items: initial;
    }

    button {
      padding: 1.2rem 1.5rem;
    }
  }
`
