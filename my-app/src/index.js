import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import { Booking } from './Components/Booking/booking';
import { Dashboard } from './Components/Dashboard/dashboard';
import { Contact } from './Components/Contact/contact';
import './index.css';

// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>
  },
  {
    path: "/booking",
    element: <Booking/>
  },
  {
    path: "/booking",
    element: <Dashboard/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
  
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
