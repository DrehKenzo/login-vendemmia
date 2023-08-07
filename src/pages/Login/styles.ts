import { styled } from 'styled-components'
import BackgroundImg from '../../assets/bg-login02.jpg'

export const SignInContainer = styled.main`
  background: url(${BackgroundImg}) top center no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    margin-top: 1.8rem;
  }

  span {
    color: ${({ theme }) => theme.white} !important;
    font-size: 2rem;
    margin: 1.8rem 0;
  }

  label span {
    margin: 1.5rem 0 0;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: ${({ theme }) => theme['gray-700']};
    }
  }
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  max-width: 38.4rem;
  margin-top: 1rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    font-weight: 600;
    font-size: 1.6rem;
  }

  div {
    background: ${({ theme }) => theme.white};
    display: flex;
    height: 4.8rem;
    width: 100%;
    align-items: center;
    gap: 1.2rem;
    border-radius: 0.25rem;
    padding: 1.6rem 1.2rem;
    border-radius: 0.4rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  input {
    color: ${({ theme }) => theme['gray-700']};
    outline: 2px solid transparent;
    outline-offset: 2px;
    font-size: 1.4rem;
    background-color: transparent;
    flex: 1 1 0%;
    border: 0;
  }

  button {
    background: ${({ theme }) => theme['color-accent-400']};
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    font-size: 1.6rem;
    padding: 1.6rem 1.2rem;
    border-radius: 0.4rem;
    transition: all 0.2s;
    cursor: pointer;
    border: 0;

    &:hover {
      color: ${({ theme }) => theme['color-accent-600']};
      border-color: ${({ theme }) => theme['color-accent-600']};
      background: ${({ theme }) => theme.white};
      transition: all 0.2s;
    }
  }
`
