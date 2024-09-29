import React from 'react'
import Home from './components/Home'
import Register from './auth/Register'
import Login from './auth/Login'
import { BrowserRouter,Route,Routes as Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

export default App
