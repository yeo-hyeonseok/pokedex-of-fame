import { POKEMON_TYPE_COLORS } from 'styles/Colors'
import styled, { css } from 'styled-components'

interface TypeTagProps {
  id?: string
  text: string
  color: string
}

const TypeTag = (props: TypeTagProps) => {
  const { id, text, color } = props

  return (
    <TypeTagStyle id={id} color={color}>
      {text}
    </TypeTagStyle>
  )
}

export default TypeTag

const TypeTagStyle = styled.span`
  border-radius: 4px;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: bold;

  ${(props) =>
    props.color &&
    css`
      background-color: ${POKEMON_TYPE_COLORS[props.color]};
    `}
`
