import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { 
  applyMiddleware, 
  compose, 
  legacy_createStore as createStore 
} from 'redux'
import { pokemonsReducer } from './reducers/pokemons.js'
import { featuring, logger } from './middlewares/index.js'
import App from './App.jsx'

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, featuring))

const store = createStore(pokemonsReducer, composedEnhancers);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
)
