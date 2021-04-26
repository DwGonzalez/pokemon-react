import React from 'react'
import PokemonItem from './PokemonItem'
import Spinner from '../ui/Spinner'

const PokemonGrid = ({ pokemons, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {pokemons.map(p => (
                <PokemonItem key={p.name} pokemon={p}></PokemonItem>
            ))}
        </section>
    )
}

export default PokemonGrid
