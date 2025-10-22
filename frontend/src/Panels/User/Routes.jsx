import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Userlogin from './pages/Userlogin'
import UserSignUp from './pages/UserSignUp'
import TrySimulation from './pages/TrySimulation'

const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/UD" element={<Dashboard />} />
        <Route path="/UD/UserLogin" element={<Userlogin />} />
        <Route path="/UD/UserSignUp" element={<UserSignUp />} />
        <Route path="/UD/TrySimulation" element={<TrySimulation />} />
      </Routes>
    </Router>
  )
}


export default UserRoutes
