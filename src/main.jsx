import React from 'react'
import ReactDOM from 'react-dom/client'
import Name from './Name.jsx'
import Logos from './Logos.jsx'
import Theme from './Theme.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme />
    <Name />
    <Logos/>
  </React.StrictMode>
)
