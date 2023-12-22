import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home/Home';
import AuthProviders from './Providers/AuthProviders';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Dashboard from './Layout/Dashboard';
import AddTask from './Pages/Dashboard/AddTask/AddTask';
import AllTask from './Pages/Dashboard/AllTask/AllTask';
import ToDo from './Pages/Dashboard/ToDo/ToDo';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
    {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'to_do',
        element: <ToDo></ToDo>,
        loader: () => fetch('http://localhost:5000/tasks')
      },
      {
        path: "add_task",
        element: <AddTask></AddTask>
      },
      {
        path: "all_task",
        element: <AllTask></AllTask>,
        loader: () => fetch('http://localhost:5000/tasks')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='max-w-[1920px] mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
