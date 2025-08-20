import React from 'react'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Sigin from './components/Signin/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './components/CreateAccount/CreateAccount'


function App() {
  return (
    <>
    <BrowserRouter >
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/signin" element={<Sigin />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/create" element={<CreateAccount />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App