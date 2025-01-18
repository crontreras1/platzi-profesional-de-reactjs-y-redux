import { PokemonCard } from "./PokemonCard"
import './PokemonList.css'

export const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
            {
                pokemons.map(pokemon => <PokemonCard />)
            }
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(20).fill('')
}