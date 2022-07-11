import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const node = document.getElementById('root')
const root = ReactDOM.createRoot(node)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
