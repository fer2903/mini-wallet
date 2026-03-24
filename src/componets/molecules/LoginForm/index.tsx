import { useState, type FormEvent } from 'react'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import { useAuth } from '../../../context/useAuth'
import { ErrorText, Form, Title } from './LoginForm.styles'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const success = login(email, password)

    if (!success) {
      setError('Email y password son obligatorios.')
      return
    }

    setError('')
  }

  return (
    <Form onSubmit={handleLogin}>
      <Title>Iniciar sesion</Title>
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Input
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label='Login' type='submit' />
    </Form>
  )
}

export default LoginForm
