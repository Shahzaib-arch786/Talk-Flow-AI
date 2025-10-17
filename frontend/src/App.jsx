import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Panels/User/pages/Dashboard'
import Userlogin from './Panels/User/pages/Userlogin'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Userlogin />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
