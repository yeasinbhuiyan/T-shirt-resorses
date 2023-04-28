import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Main.jsx/Main';
import GrandPa from './Components/GrandPa/GrandPa';
import OrederReview from './Components/OrderReview/OrederReview';
import { loadData } from './Components/OrderReview/OrderLoadData';
import Banner from './Components/Home/Banner/Banner';
import Login from './Components/LoginAndRegistation/Login';
import Registation from './Components/LoginAndRegistation/Registation';
import AuthProvider from './Components/AuthProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/shop',
        element: <Main></Main>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/orderReview',
        element: <OrederReview></OrederReview>,
        loader: loadData
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registation',
        element: <Registation></Registation>
      }
      // {
      //   path : '/grandpa',
      //   element: <GrandPa></GrandPa>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
