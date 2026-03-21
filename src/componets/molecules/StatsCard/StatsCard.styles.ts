import styled from 'styled-components'

export const Card = styled.article`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
`

export const Title = styled.p`
  margin: 0;
  color: #64748b;
`

export const Amount = styled.h3<{ value: number }>`
  margin: 10px 0 0;
  color: ${(props) => (props.value >= 0 ? '#16a34a' : '#dc2626')};
`
