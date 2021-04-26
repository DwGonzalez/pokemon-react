import React, { useState, useEffect } from 'react'
import Spinner from '../ui/Spinner'
import axios from 'axios'

const PokemonItem = ({ pokemon }) => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [isLoadingItem, setLoadingItem] = useState(true)

    useEffect(() => {
        const fetchPokemon = async () => {
            const result = await axios(pokemon.url)
            setPokemonDetails(result.data)
            setLoadingItem(false)
        }
        fetchPokemon()
    }, [])

    return isLoadingItem ? (
        <Spinner />
    ) : (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDetails.id}.png`}
                        alt={pokemon.name} />
                </div>
                <div className='card-back'>
                    <h1>{pokemon.name}</h1>
                    <ul>
                        <li>
                            <strong>#{pokemonDetails.id}</strong>
                        </li>
                        <li> Types:
                            <ol>
                                {pokemonDetails.types ?
                                    pokemonDetails.types.map(type => <li key={type.type.name}>
                                        <strong>- {type.type.name}</strong>
                                    </li>) : 'undefined'}
                            </ol>
                        </li>
                        <li>Abilities:
                            <ol>
                                {pokemonDetails.abilities ?
                                    pokemonDetails.abilities.map(ab => <li key={ab.ability.name}>
                                        <strong>- {ab.ability.name}</strong>
                                    </li>) : 'undefined'}
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
