import {createStore,applyMiddleware,compose} from "redux"
import posteReducer from './reducer/posteReducer'
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(posteReducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store