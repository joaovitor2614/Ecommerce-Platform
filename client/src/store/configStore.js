import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import defaultReducer from '../reducers/default'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
        combineReducers({
          default: defaultReducer     
        }),
        composeEnhancers(applyMiddleware(thunk))
    );




export default store