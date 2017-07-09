import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    )
)

const store = createStore(reducer, enhancer);


export default store
