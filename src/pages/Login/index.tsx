import { FormEvent, useState } from 'react'
import { Envelope, Lock } from 'phosphor-react'
import { FormLogin, SignInContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [mensagemErro, setMensagemErro] = useState('')

  const navigate = useNavigate()

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    if (login === 'vendemmia' && password === '123123123') {
      // Autenticação bem-sucedida
      setMensagemErro('')
      setIsUserSignIn(true)
      navigate('/dashboard')
    } else {
      // Autenticação inválida
      setMensagemErro('Usuário ou password inválidos.')
    }
  }

  return (
    <SignInContainer>
      <header>
        <img src={logoImg} alt="" />

        <span>pessoas e negócios conectados</span>
        <p>Login: vendemmia</p>
        <p>password: 123123123</p>
      </header>

      <FormLogin onSubmit={handleSignIn}>
        {isUserSignIn && <span>Login realizado!</span>}
        <label htmlFor="user">
          <span>Endereço de e-mail</span>
          <div>
            <Envelope color="#29292E" />
            <input
              type="text"
              id="user"
              placeholder="digite seu usuário"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </label>

        <label htmlFor="password">
          <span>Sua password</span>
          <div>
            <Lock color="#29292E" />
            <input
              type="password"
              id="email"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>

        <button type="submit">Entrar na plataforma</button>
        {mensagemErro && <p>{mensagemErro}</p>}
      </FormLogin>
    </SignInContainer>
  )
}
