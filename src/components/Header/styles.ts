import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 4rem 0 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 150px;
  }

  a {
    display: flex;
    align-items: center;
    height: 50px;
    border: 0;
    gap: 8px;
    background: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    padding: 0 2rem;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: ${({ theme }) => theme['green-700']};
      transition: background-color 0.2s;
    }
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    img {
      max-width: initial;
    }
  }
`
