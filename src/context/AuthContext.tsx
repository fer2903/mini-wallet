import { useMemo, useState, type ReactNode } from 'react'
import { AuthContext } from './auth-context'

type AuthProviderProps = {
  children: ReactNode
}

const AUTH_STORAGE_KEY = 'wallet-dashboard-auth'

type PersistedAuth = {
  isAuthenticated: boolean
  userEmail: string | null
}

const readPersistedAuth = (): PersistedAuth => {
  if (typeof window === 'undefined') {
    return { isAuthenticated: false, userEmail: null }
  }

  const rawAuth = localStorage.getItem(AUTH_STORAGE_KEY)
  if (!rawAuth) {
    return { isAuthenticated: false, userEmail: null }
  }

  try {
    const parsed = JSON.parse(rawAuth) as PersistedAuth
    return {
      isAuthenticated: Boolean(parsed.isAuthenticated),
      userEmail: parsed.userEmail ?? null,
    }
  } catch {
    return { isAuthenticated: false, userEmail: null }
  }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [initialAuth] = useState<PersistedAuth>(readPersistedAuth)
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth.isAuthenticated)
  const [userEmail, setUserEmail] = useState<string | null>(initialAuth.userEmail)

  const login = (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      return false
    }

    const nextAuth: PersistedAuth = {
      isAuthenticated: true,
      userEmail: email,
    }

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth))
    setIsAuthenticated(true)
    setUserEmail(email)
    return true
  }

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setIsAuthenticated(false)
    setUserEmail(null)
  }

  const value = useMemo(
    () => ({
      isAuthenticated,
      userEmail,
      login,
      logout,
    }),
    [isAuthenticated, userEmail]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
