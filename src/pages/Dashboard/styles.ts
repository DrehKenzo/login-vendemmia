import { styled } from 'styled-components'

export const DashboardContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 6.4rem auto 0;
  padding: 0 2.4rem;
`

export const UsersContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2.4rem;

  ul {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 3.2rem;
    text-align: center;

    &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  li {
    list-style: none;
  }

  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: var(--black-a3);
    border: 2px solid #fff;
    box-sizing: content-box;
  }

  .AvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  @media (min-width: ${({ theme }) => theme.media.desktop}) {
    ul {
      grid-template-columns: 100px 100px 1fr 1fr 1fr;
    }
  }
`

export const UserDetailsButton = styled.button`
  height: 50px;
  width: 100%;
  border: 0;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`
