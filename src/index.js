import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import App from './App'

const node = document.getElementById('root')
const root = ReactDOM.createRoot(node)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
