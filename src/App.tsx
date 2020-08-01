import React from 'react'
import './style/App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import { Pdf } from ':components/pdf'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Pdf />
      </div>
    </Router>
  )
}
