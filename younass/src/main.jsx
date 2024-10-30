import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import ProductDetails from './components/productDetails.jsx'
import Signup from './pages/Signup.jsx'
import Kimonos from './pages/Kimonos.jsx'
import Dresses from './pages/Dresses.jsx'
import Kaftans from './pages/Kaftans.jsx'
import Skirts from './pages/Skirts.jsx'
import Shirts from './pages/Shirts.jsx'
import Interior from './pages/Interior.jsx'

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
  {
    path: '/dresses',
    element: <Dresses/>
  },
  {
    path: 'kaftan',
    element: <Kaftans />
  },
  {
    path: '/skirts',
    element: <Skirts/>
  },
  {
    path: '/shirts',
    element: <Shirts/>
  },

  {
    path: '/interior',
    element: <Interior/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
