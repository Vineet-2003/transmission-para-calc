import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import SuccessfulPage from "./Successful/SuccessfulPage.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Successful",
    element: <SuccessfulPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
