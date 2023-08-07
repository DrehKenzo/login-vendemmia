import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UsersProvider } from './contexts/UsersContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UsersProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UsersProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
