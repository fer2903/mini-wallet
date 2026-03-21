import {  useEffect, useState } from 'react'
import styled from 'styled-components'
import type { Transaction } from '../../../types/Transaction'
import { transactions } from '../../../data/transactions' 
import TransactionItem from '../../molecules/TransactionItem'

const Container = styled.div`
    bacnkground: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    margin: 20px;
`

const Header = styled.div`
    padding: 20px;
    border-bottom: 1px solid #eee;
    font-weight: 600;
`

const TransactionList = () => {
    const [data, setData] = useState<Transaction[]> ([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchTransactions = async (): Promise<Transaction[]> =>{
            await new Promise((resolve)=> setTimeout(resolve, 800))
            return transactions
        }

        fetchTransactions().then((res)=>{
            setData(res)
            setLoading(false)
        })
        console.log("se esta cargando la pagina")
    }, [])

        console.log(loading)

    if (loading) return <p>Loading...</p>

    return (
        <Container>
            <Header>
                Transacciones Recentes
            </Header>

            {data.map((transaction) =>(
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </Container>
    )
}

export default TransactionList;