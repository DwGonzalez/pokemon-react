import React from 'react'
import PokemonItem from './PokemonItem'

const PokemonGrid = ({ pokemons, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards">
            {pokemons.map(p => (
                <PokemonItem key={p.name} pokemon={p}></PokemonItem>
            ))}
        </section>
    )
}

export default PokemonGrid
