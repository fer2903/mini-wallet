import { useEffect, useState } from 'react'
import type { Transaction } from '../../../types/Transaction'
import { transactions } from '../../../data/transactions'
import TransactionItem from '../../molecules/TransactionItem'
import { Container, Header, Loading } from './TransactionList.styles'

const TransactionList = () => {
  const [data, setData] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTransactions = async (): Promise<Transaction[]> => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      return transactions
    }

    fetchTransactions().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loading>Loading...</Loading>

  return (
    <Container>
      <Header>Transacciones recientes</Header>

      {data.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Container>
  )
}

export default TransactionList