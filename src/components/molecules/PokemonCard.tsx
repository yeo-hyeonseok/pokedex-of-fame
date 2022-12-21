import styled from 'styled-components'
import TypeTag from '../atoms/TypeTag'
import MediumImage from '../atoms/MediumImage'
import NameTag from '../atoms/NameTag'

interface PokemonCardProps {
  id?: string
  types: PokemonType[]
  src: string
  number: number
  name: string
}

interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

const PokemonCard = (props: PokemonCardProps) => {
  const { id, types, src, number, name } = props

  const addZero = (number: string): string => {
    if (number.length == 2) {
      return '0' + number
    } else if (number.length == 1) {
      return '00' + number
    } else {
      return number
    }
  }

  return (
    <PokemonCardStyle id={id}>
      <div className="pokemon-type">
        {types.map((item: PokemonType, index: number) => {
          return <TypeTag key={index} id="pokemon-type-item" text={item.type.name} color={item.type.name} />
        })}
      </div>
      <div className="pokemon-info">
        <MediumImage alt={name} src={src} id="pokemon-image" />
        <NameTag label={addZero(String(number))} text={name} />
      </div>
    </PokemonCardStyle>
  )
}

export default PokemonCard

const PokemonCardStyle = styled.div`
  width: 180px;
  height: 220px;

  @media screen and (max-width: 767px) {
    width: 150px;
    height: 220px;
  }

  .pokemon-type {
    #pokemon-type-item:first-child {
      margin-right: 5px;
    }
  }

  .pokemon-info {
    #pokemon-image {
    }
  }
`
