import LoginForm from '../../componets/molecules/LoginForm'
import { LoginCard, LoginContainer } from './Login.styles'

const Login = () => {
  return (
    <LoginContainer>
      <LoginCard>
        <LoginForm />
      </LoginCard>
    </LoginContainer>
  )
}

export default Login