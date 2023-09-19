import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './Error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <root></root>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/app',
        element: <div><h1>App</h1></div>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      }
    ]
  },
  {
    path: '/',
    element: <div>Hello! Welcome to React Router</div>,
  },
  {
    path: '/app',
    element: <App></App>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
