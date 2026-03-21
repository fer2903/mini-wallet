import styled from "styled-components";

type Props = {
    title: string;
    amount: number
}

const Card = styled.div`
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1, 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;

`

const Title = styled.p`
    opacity: 0.8;
`

const Amount = styled.h2`
    font-size: 24px;
    margin-top: 10px;
`

const BalanceCard = ({title, amount}: Props) =>{
    return (
        <Card>
            <Title>{title}</Title>
            <Amount>Monto: {amount}</Amount>
        </Card>
    )
}

export default BalanceCard;