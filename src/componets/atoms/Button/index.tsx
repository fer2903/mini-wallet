import { StyledButton } from './Button.styles'

type Props = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = ({ label, onClick, type = 'button' }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

export default Button
