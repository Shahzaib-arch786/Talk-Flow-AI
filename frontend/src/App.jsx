import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserRoutes from './Panels/User/Routes.jsx'
function App() {

  return (
    <>
      <div className='App'>
        <UserRoutes />
      </div>
    </>
  )
}

export default App
