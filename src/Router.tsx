import { Routes, Route } from 'react-router-dom'

import { SignIn } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
