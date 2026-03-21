import styled from "styled-components";
import type { Transaction } from "../../../types/Transaction";

type Props = {
    transaction: Transaction;
}

// Estilos para el item de transacción

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14px;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f9f9fb;
    }
        `

    
const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    font-weight: 600;
`

const DateText = styled.span`
    font-size: 12px;
    color: #888;
`

const Amount = styled.span<{ value: number}>`
    font-weight: 600;
    color: ${
        (props) => props.value < 0 ? '#ef444a' : '#4caf50'
    };
`

const TransactionItem = ({ transaction }: Props) =>{
    return(
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

export default TransactionItem;