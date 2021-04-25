import React from 'react'

const PokemonGrid = ({ pokemons, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards">
            {pokemons.map(p => (
                <h1 key={p.name}>{p.name}</h1>
            ))}
        </section>
    )
}

export default PokemonGrid
