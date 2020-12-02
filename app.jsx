import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/index'
import AppProvider from './hooks'

const App = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  </>
)

export default App
