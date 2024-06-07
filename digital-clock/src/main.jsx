import React from 'react'
import Clock from './digital-clock'
import './clock.css'
import CurDate from './digidate'
import ReactDOM from 'react-dom/client'
import './date.css'
import Day from './day'
import './day.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Day/>
    <Clock/>
    <CurDate/>
  </React.StrictMode>,
)
