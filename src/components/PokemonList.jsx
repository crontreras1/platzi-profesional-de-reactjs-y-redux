import { PokemonCard } from "./PokemonCard"
import './PokemonList.css'

export const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
            {
                pokemons.map(pokemon => <PokemonCard name={ pokemon.name } key={ pokemon.name } />)
            }
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(20).fill('')
}