import { Amount, Card, Title } from './BalanceCard.styles'

type Props = {
  title: string
  amount: number
}

const BalanceCard = ({ title, amount }: Props) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Amount>{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Amount>
    </Card>
  )
}

export default BalanceCard