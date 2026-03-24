import type { Transaction } from '../../../types/Transaction'
import { Amount, DateText, Info, ItemContainer, Title } from './TransactionItem.styles'

type Props = {
  transaction: Transaction
}

const TransactionItem = ({ transaction }: Props) => {
  return (
    <ItemContainer>
      <Info>
        <Title>{transaction.title}</Title>
        <DateText>{transaction.date}</DateText>
      </Info>
      <Amount value={transaction.amount}>
        {transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Amount>
    </ItemContainer>
  )
}

export default TransactionItem