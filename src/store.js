import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import epgReducer from './Components/state/serverData/reducer'

const reducer = combineReducers({
  epgData: epgReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    )
)

const store = createStore(reducer, enhancer);


export default store
