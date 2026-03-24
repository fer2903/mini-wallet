import { Amount, Card, Title } from './StatsCard.styles'

type Props = {
  title: string
  amount: number
}

const StatsCard = ({ title, amount }: Props) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Amount value={amount}>{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Amount>
    </Card>
  )
}

export default StatsCard