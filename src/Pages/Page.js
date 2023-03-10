import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Page
