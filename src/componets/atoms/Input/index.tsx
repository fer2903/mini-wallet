import type { ChangeEventHandler } from 'react'
import { StyledInput } from './Input.styles'

type Props = {
  placeholder: string
  value?: string
  type?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ placeholder, value, type = 'text', onChange }: Props) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
}

export default Input