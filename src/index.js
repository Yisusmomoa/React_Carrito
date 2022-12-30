import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carrito from './routes/Carrito';
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
const router=createBrowserRouter([
  {
    
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/products/:id",
        element:<ProductDetail></ProductDetail>
      },
      {
        path:"/cart",
        element:<Carrito></Carrito>
      }
    ]

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
