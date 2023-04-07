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


const router =createBrowserRouter([
  {
path : '/',
element :<Home></Home>,
children : [
  {
    path : '/',
    element :  <Main></Main>,
    loader : ()=> fetch('tshirts.json')
  },
  {
    path : '/orderReview',
    element: <OrederReview></OrederReview>,
    loader : loadData
  },
  {
    path : '/login',
    element: <div>This is login compo </div>
  },
  {
    path : '/grandpa',
    element: <GrandPa></GrandPa>
  }
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
