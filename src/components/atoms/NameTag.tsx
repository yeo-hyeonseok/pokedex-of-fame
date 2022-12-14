import styled from 'styled-components'

interface NameTagProps {
  id?: string
  label: string
  text: string
}

const NameTag = (props: NameTagProps) => {
  const { id, label, text } = props

  return (
    <NameTagStyle id={id}>
      <span className="pokemon-number">{label}</span>
      <p className="pokemon-name">{text}</p>
    </NameTagStyle>
  )
}

export default NameTag

const NameTagStyle = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid black;

  .pokemon-number {
    background-color: black;
    color: white;
    border-radius: 8px 0 0 8px;
    padding: 4px 6px;
    font-family: 'DungGeunMo';
  }

  .pokemon-name {
    padding: 4px 6px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    font-family: 'DungGeunMo';
  }
`
