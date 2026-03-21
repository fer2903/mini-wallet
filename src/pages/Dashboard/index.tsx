import styled from "styled-components";
import BalanceCard from "../../componets/molecules/BalanceCard";
import StatsCard from "../../componets/molecules/StatsCard";
import TransactionList from "../../componets/organisms/TransactionList";

const Grid = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`

const Container = styled.div`
    padding: 20px;
`

const Dashboard = () => {
    return (
        <>
        <Container>
            <h1>Wallet Dashboard</h1>
            <Grid>
                <BalanceCard title="Balance" amount={1000} />
                <StatsCard title="recibidas" amount={5000} />
                <StatsCard title="salidas" amount={-450} />
            </Grid>

            <TransactionList/>
        </Container>
        </>
    )
}

export default Dashboard;