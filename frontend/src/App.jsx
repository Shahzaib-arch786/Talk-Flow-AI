import './App.css'
import UserRoutes from './Panels/User/Routes.jsx'
import AdminRoutes from './Panels/Admin/Routes.jsx'
function App() {

  return (
    <>
      <div className='App'>
        <UserRoutes />
        <AdminRoutes />
      </div>
    </>
  )
}

export default App
