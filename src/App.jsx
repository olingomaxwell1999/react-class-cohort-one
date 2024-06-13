
import './App.scss'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Jobpage from './Pages/Jobpage/Jobpage'
import Addpage from './Pages/Addpage/Addpage'
import Layout from './Components/Layout/Layout'
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/jobs' element={<Jobpage/>}/>
        <Route path='/addjob' element={<Addpage/>}/>
      </Route>
    )
  )

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
