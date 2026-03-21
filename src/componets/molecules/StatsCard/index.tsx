import styled from "styled-components";

type Props = {
    title: string;
    amount: number
}

const Card = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Title = styled.p`
    color #666;
`

const Amount = styled.h3<{value: number}>`
    color: ${ (props) => props.value >= 0 ? 'green' : 'red' };
`

const StatsCard = ({title, amount}: Props) =>{
    return(
        <Card>
            <Title>{title}</Title>
            <Amount value={amount}>{amount}</Amount>
        </Card>
    )
}

export default StatsCard;