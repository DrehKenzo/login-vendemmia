import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button,
  select {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    border: 0;
    padding: 1.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
  }

  button {
    &:hover {
      background: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    ul {
      grid-template-columns: 100px 100px 1fr 1fr 1fr;
    }

    flex-direction: initial;
  }
`
