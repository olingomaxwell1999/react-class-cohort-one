
import './App.scss'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Jobpage from './Pages/Jobpage/Jobpage'
import Addpage from './Pages/Addpage/Addpage'
import Line from './Components/Line/Line'


function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Homepage/>
    },
    {
      path:'/jobs',
      element: <Jobpage/>
    },
    {
      path: '/addjobs',
      element: <Addpage/>
    }
  ])

  return (
    <>
      <Navbar/>
      <Line/>
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
      <Footer/>
    </>
  )
}

export default App
