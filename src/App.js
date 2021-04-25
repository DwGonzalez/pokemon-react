import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import PokemonGrid from './components/pokemons/PokemonGrid'
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemons = async () => {
      const result = await axios(currentPageUrl)

      setPokemons(result.data.results)
      setIsLoading(false)
    }

    fetchPokemons()
  }, [currentPageUrl])

  return (
    <div className="container">
      <Header />
      <PokemonGrid isLoading={isLoading} pokemons={pokemons} />
    </div>
  );
}

export default App;
