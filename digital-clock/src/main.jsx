import React from 'react'
import Clock from './digital-clock'
import './clock.css'
import CurDate from './digidate'
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Clock/>
    <CurDate/>
  </React.StrictMode>,
)
