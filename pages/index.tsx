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
  const [allPokemon, setAllPokemon] = useState([])

  const getAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
      if (res) setAllPokemon(res.data.results)
    })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <HomeStyle>
      <div className="image-container">
        <Image src={MainImage} alt="푸키먼" placeholder="blur" width={350} />
      </div>
      <div className="main-container">
        {allPokemon && allPokemon.map((item: Pokemon, index) => <div key={index}>{item.name}</div>)}
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
    justify-content: space-around;
    margin-top: 20px;

    > div {
      border: 1px dashed green;
      margin: 10px 10px;
      width: 180px;
      height: 220px;
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
