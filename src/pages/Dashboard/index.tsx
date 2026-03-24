import BalanceCard from '../../componets/molecules/BalanceCard'
import StatsCard from '../../componets/molecules/StatsCard'
import TransactionList from '../../componets/organisms/TransactionList'
import Button from '../../componets/atoms/Button'
import { useAuth } from '../../context/useAuth'
import { DashboardContainer, Header, LogoutWrapper, StatsGrid, Title, UserText } from './Dashboard.styles'

const Dashboard = () => {
  const { userEmail, logout } = useAuth()

  return (
    <DashboardContainer>
      <Header>
        <div>
          <Title>Wallet Dashboard</Title>
          <UserText>Usuario: {userEmail ?? 'demo@wallet.dev'}</UserText>
        </div>
        <LogoutWrapper>
          <Button label='Salir' onClick={logout} />
        </LogoutWrapper>
      </Header>

      <StatsGrid>
        <BalanceCard title='Balance' amount={1000} />
        <StatsCard title='Recibidas' amount={5000} />
        <StatsCard title='Salidas' amount={-450} />
      </StatsGrid>

      <TransactionList />
    </DashboardContainer>
  )
}

export default Dashboard