import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useAuth } from './context/useAuth'
import { AppShell } from './App.styles'

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <AppShell>{isAuthenticated ? <Dashboard /> : <Login />}</AppShell>
  )
}

export default App
