import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/LayOut/Main';
import OrderReviews from './components/OrderReviews/OrderReviews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReviews/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
