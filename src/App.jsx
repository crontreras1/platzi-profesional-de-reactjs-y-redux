import { useEffect } from "react"
import { connect } from 'react-redux'
import { Col } from "antd"
import { Searcher } from "./components/Searcher"
import { PokemonList } from "./components/PokemonList"
import { getPokemon } from "./api"
import { setPokemons as setPokemonsActions } from "./actions"
import logo from './assets/logo.svg'
import './App.css'

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()

      setPokemons(pokemonsRes)
    } 

    fetchPokemons()
  }, [3000])

  return (
    <div className="App">
      <Col span={ 4 } offset={ 10 }>
        <img src={ logo } alt="´logo pokedux" />
      </Col>


      <Col span={ 8 } offset={ 8 }>
        <Searcher />
      </Col>

      <PokemonList pokemons={ pokemons }/>
    </div>
  )
}

const mapStateToProps = state => ({ pokemons: state.pokemons })

const mapDispatchToProps = dispatch => ({ setPokemons: value =>  dispatch(setPokemonsActions(value)) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
