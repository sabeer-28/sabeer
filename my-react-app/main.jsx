import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import login from './login'
import Home from './Home'
// import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home />,
      errorElement:<NotFound/>
    },
    {
      path:'/login',
      element:<login/>,
      errorElement:<NotFound/>
    },
    {
      path:'/',
      element:<counter/>;
    }
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <login/>
    <router
    <Home /> */}

  </StrictMode>
)
