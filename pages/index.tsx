import styled from 'styled-components'
import Image from 'next/image'
import MainImage from 'public/assets/image/pokemon.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<any>([])

  const getOnePokemon = (pokemon: string) => {
    axios.get(pokemon).then((response) => {
      if (response) {
        setAllPokemon((prevPokemons: any) => [...prevPokemons, response.data])
      } else {
        console.log('뭔가 이상함')
      }
    })
  }

  const getAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((allPokemon) => {
      allPokemon.data.results.forEach((pokemon: any) => {
        getOnePokemon(pokemon.url)
      })
    })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  useEffect(() => {
    console.log(allPokemon)
  }, [allPokemon])

  return (
    <HomeStyle>
      <div className="image-container">
        <Image src={MainImage} alt="푸키먼" placeholder="blur" width={350} />
      </div>
      <div className="main-container">
        {allPokemon &&
          allPokemon.map((item: any, index: number) => (
            <div key={index}>
              <Image width={100} height={100} alt={item.name} src={item.sprites.front_default} />
            </div>
          ))}
      </div>
      <div className="side-menu">
        <div className="side-menu-content">ball 1</div>
        <div className="side-menu-content">ball 2</div>
        <div className="side-menu-content">ball 3</div>
        <div className="side-menu-content">ball 4</div>
        <div className="side-menu-content">ball 5</div>
        <div className="side-menu-content">ball 6</div>
      </div>
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
  border: 1px dashed red;
  position: relative;

  .image-container {
    width: 100%;
    border: 1px dashed blue;
    text-align: center;
    margin-top: 40px;
  }

  .main-container {
    padding: 10px 15vw;
    width: 100%;
    border: 1px dashed blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    > div {
      border: 1px dashed green;
      margin: 10px 10px;
      width: 180px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }

  .side-menu {
    position: fixed;
    right: 10px;
    top: 20%;
    border: 1px dashed blue;
    width: 200px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;

    .side-menu-content {
      border: 1px dashed green;
      border-radius: 50%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
