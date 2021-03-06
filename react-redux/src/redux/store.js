import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'

const rootReducer = combineReducers({
    pokes: pokeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}