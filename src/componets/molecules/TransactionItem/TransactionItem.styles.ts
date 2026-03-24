import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8fafc;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 600;
  color: #0f172a;
`

export const DateText = styled.span`
  font-size: 12px;
  color: #64748b;
`

export const Amount = styled.span<{ value: number }>`
  font-weight: 600;
  color: ${(props) => (props.value < 0 ? '#ef4444' : '#16a34a')};
`
