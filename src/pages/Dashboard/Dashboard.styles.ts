import styled from 'styled-components'

export const DashboardContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 16px;
`

export const LogoutWrapper = styled.div`
  width: 120px;
`

export const Title = styled.h1`
  margin: 0;
  color: #0f172a;
  font-size: 28px;
`

export const UserText = styled.p`
  margin: 0;
  color: #475569;
  font-size: 14px;
`

export const StatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`
