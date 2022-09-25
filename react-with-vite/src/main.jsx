import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Home} from './components/Home'
import {Login}  from './components/Login'
import { TituloPrincipal } from './components/TituloPrincipal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TituloPrincipal />
    <Login />
  </React.StrictMode>
)
