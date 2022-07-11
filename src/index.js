import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './App'
import './assets/scss/style.scss'

const node = document.getElementById('root')
const root = ReactDOM.createRoot(node)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
)
