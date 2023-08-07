import { HeaderContainer, HeaderContent } from './styles'
import { NavLink } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { SignOut } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NavLink to="/">
          Deslogar
          <SignOut size={28} color="#00b37e" />
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  )
}
