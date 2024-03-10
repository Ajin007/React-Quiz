import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WebLayout from './components/layout/WebLayout'
import Login from './pages/Auth/Login'
import Contact from './pages/Contact'
import Register from './pages/Auth/Register'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App