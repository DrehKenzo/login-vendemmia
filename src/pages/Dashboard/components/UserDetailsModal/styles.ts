import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 40.1rem;
  border-radius: 6px;
  padding: 4rem 4.8rem;
  background: ${({ theme }) => theme['gray-800']};
  text-align: center;
  font-size: 1.8rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  li {
    list-style: none;
  }

  h2 {
    font-size: 1.8rem;
  }

  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background-color: var(--black-a3);
    border: 2px solid #fff;
    box-sizing: content-box;
    margin: 1.5rem 0 0.8rem;
  }

  .AvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme['green-500']};
`
