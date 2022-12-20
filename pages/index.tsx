import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonCard from 'src/components/molecules/PokemonCard'
import { Pokemon } from 'types/Pokemon'
import { Result } from 'types/AllPokemons'

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([])

  const getAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((allPokemon) => {
      allPokemon.data.results.forEach((pokemon: Result) => {
        axios.get(pokemon.url).then((response) => {
          setAllPokemon((prevPokemons: Pokemon[]) => [...prevPokemons, response.data])
        })
      })
    })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <HomeStyle>
      <div className="main-container">
        {allPokemon &&
          allPokemon.map((item: Pokemon, index: number) => (
            <PokemonCard
              id="pokemon-card"
              types={item.types}
              src={item.sprites.front_default}
              name={item.name}
              number={item.id}
              key={index}
            />
          ))}
      </div>
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
  .main-container {
    padding: 10px 12vw;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px;

    #pokemon-card {
      margin: 20px 15px;
    }
  }

  @media screen and (max-width: 767px) {
    .main-container {
      padding: 0 6vw;

      #pokemon-card {
        margin: 20px 5px;
      }
    }
  }
`
