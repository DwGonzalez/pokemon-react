import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonItem = ({ pokemon }) => {
    const [pokemonId, setPokemonId] = useState([])
    const [isLoadingItem, setLoadingItem] = useState(true)

    useEffect(() => {
        const fetchId = async () => {
            const result = await axios(pokemon.url)
            //const picture = await axios(`https://pokeres.bastionbot.org/images/pokemon/${result.data.id}.png`)
            setPokemonId(result.data.id)
            //console.log(result.data.id)
            setLoadingItem(false)
        }
        fetchId()
    }, [])

    return isLoadingItem ? <h1>Loading...</h1> : (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} alt={pokemon.name} />
                </div>
                <div className='card-back'>
                    <h1>{pokemon.name}</h1>
                    <ul>
                        <li>
                            <strong>#{pokemonId}</strong>
                        </li>
                        <li>
                            {/* <strong>Nickname:</strong> {item.nickname} */}
                            <ul>
                                <li>test</li>
                            </ul>
                        </li>
                        <li>
                            {/* <strong>Birthday:</strong> {item.birthday} */}
                        </li>
                        <li>
                            {/* <strong>Status:</strong> {item.status} */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
