import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carousel from "./componenets/Carousel";
import Card from './componenets/Card';
import Brandstore from './componenets/Brandstore';
import Diamond from './componenets/Diamond';
import Account from './componenets/Account';

const appRouting = createBrowserRouter([
 {
    path: "/",
    element: <App/>,
    children: [
      {
          path : "/",
          element : <Carousel/>
      },
     
      {
        path: "/card",
        element: <Card />
      },

      {
        path: "/store",
        element: <Brandstore/>
      },

      {
        path: "/diamond",
        element: <Diamond/>
      },

      {
        path: "/account",
        element: <Account/>
      }
  ]

}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouting}/> );



