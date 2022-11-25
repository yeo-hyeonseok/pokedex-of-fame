import styled from 'styled-components'

const PokemonInfo = () => {
  return (
    <PokemonInfoStyle>
      <div>
        <h1>포켓몬에 대한 정보index</h1>
      </div>
    </PokemonInfoStyle>
  )
}

export default PokemonInfo

const PokemonInfoStyle = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
