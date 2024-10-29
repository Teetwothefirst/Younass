import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import ProductDetails from './components/productDetails.jsx'
import Signup from './pages/Signup.jsx'
import Kimonos from './pages/Kimonos.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <div className='text-3xl flex item-center justify-center'>Page not found</div>,
    children: [
      {
        path: 'productdetails',
        element: <ProductDetails />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/kimonos',
    element: <Kimonos/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
