import styled from 'styled-components'
import Image from 'next/image'
import LogoImage from 'public/assets/image/pof_logo.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const addZero = (number: string) => {
  if (number.length == 2) {
    return '0' + number
  } else if (number.length == 1) {
    return '00' + number
  } else {
    return number
  }
}

const NavBar = (props: any) => {
  const { id } = props

  return (
    <NavBarStyle id={id}>
      <div className="logo-container">
        <Image src={LogoImage} alt="푸키먼" placeholder="blur" width={350} className="logo-image" />
        <span className="version-info">v1.0.0</span>
      </div>
    </NavBarStyle>
  )
}

const PokemonCard = (props: any) => {
  const { id, types, src, number, name } = props

  return (
    <PokemonCardStyle id={id}>
      <div className="pokemon-type">
        {types.map((item: any, index: number) => {
          return (
            <span key={index} className="pokemon-type-item">
              {item.type.name}
            </span>
          )
        })}
      </div>
      <div className="pokemon-info">
        <Image width={150} height={150} alt={name} src={src} className="pokemon-image" />
        <div className="pokemon-nametag">
          <span className="pokemon-number">{addZero(String(number))}</span>
          <p className="pokemon-name">{name}</p>
        </div>
      </div>
    </PokemonCardStyle>
  )
}

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<any>([])

  const getAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((allPokemon) => {
      allPokemon.data.results.forEach((pokemon: any) => {
        axios.get(pokemon.url).then((response) => {
          setAllPokemon((prevPokemons: any) => [...prevPokemons, response.data])
        })
      })
    })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <HomeStyle>
      <NavBar id="main-gnb" />
      <div className="main-container">
        {allPokemon &&
          allPokemon.map((item: any, index: number) => (
            <div key={index}>
              <PokemonCard
                id="pokemon-card"
                types={item.types}
                src={item.sprites.front_default}
                name={item.name}
                number={item.id}
              />
            </div>
          ))}
      </div>
    </HomeStyle>
  )
}

export default Home

const NavBarStyle = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  box-shadow: 1px 5px 12px -5px rgba(110, 110, 110, 0.5);
  -webkit-box-shadow: 1px 5px 12px -5px rgba(110, 110, 110, 0.5);
  -moz-box-shadow: 1px 5px 12px -5px rgba(110, 110, 110, 0.5);

  .logo-container {
    margin-left: 4rem;
    display: flex;

    .logo-image {
    }

    .version-info {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 1rem;
      font-size: 16px;
    }
  }
`

const HomeStyle = styled.div`
  .main-container {
    padding: 10px 15vw;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    > div {
      margin: 20px 10px;
      width: 180px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
`

const PokemonCardStyle = styled.div`
  .pokemon-type {
    .pokemon-type-item {
      background-color: lightgray;
      border-radius: 4px;
      padding: 3px 5px;

      &:first-child {
        margin-right: 3px;
      }
    }
  }

  .pokemon-info {
    .pokemon-image {
    }

    .pokemon-nametag {
      display: flex;
      border-radius: 12px;
      border: 2px solid black;
      box-sizing: border-box;

      .pokemon-number {
        background-color: black;
        color: white;
        border-radius: 10px 0 0 10px;
        padding: 4px 6px;
      }

      .pokemon-name {
        padding: 4px 6px;
        width: 100%;
        text-align: center;
      }
    }
  }
`
