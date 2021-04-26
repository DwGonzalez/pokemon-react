import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import PokemonGrid from './components/pokemons/PokemonGrid'
import './App.css';
import Pagination from './components/ui/Pagination';

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchPokemons = async () => {
      const result = await axios(currentPageUrl)

      setPokemons(result.data.results)
      setNextPageUrl(result.data.next)
      setPrevPageUrl(result.data.previous)
      setIsLoading(false)
    }

    fetchPokemons()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <div className="container">
      <Header />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      <PokemonGrid isLoading={isLoading} pokemons={pokemons} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default App;
