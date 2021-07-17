import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/configStore'
import AppRouter from './router/AppRouter'


import './styles/main.scss'





const jsx = (
    <Provider store={store}> 
            <AppRouter />
       
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))