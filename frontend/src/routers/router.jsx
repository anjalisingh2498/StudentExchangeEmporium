import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App"
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";
import Chat from "../components/Chat.jsx"
import SingleBook from "../shop/SingleBook.jsx";
import UploadItem from "../dashboard/UploadItem.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import ManageItem from "../dashboard/ManageItem.jsx";
import EditItem from "../dashboard/EditItem.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx"
import SignUp from "../components/SignUp.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Login from "../components/Login.jsx";
import Logout from "../components/Logout.jsx";
import SendMessage from "../components/SendMessage.jsx";
import AlumniStories from "../components/AlumniStories.jsx";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
          path:"/shop",
          element : <Shop/>
        },
        {
          path:"/about",
          element : <About/>
        },
        {
          path:"/chat",
          element : <Chat/>
        },
        {
          path:"/sendmessage",
          element:<SendMessage/>
        },
        {
          path:"/Alumni",
          element:<AlumniStories/>
        },
        {
          path:"/book/:id",
          element:<SingleBook/>,
          loader: async ({ params }) => {
            try {
              const response = await fetch(`http://localhost:5000/book/${params.id}`);
              if (!response.ok) {
                throw new Error(`Failed to fetch book ${params.id}: ${response.status}`);
              }
              return response.json();
            } catch (error) {
              console.error(error);
              throw error;
            }
          }
        }
       
      ]
    },
    {
      path:"/admin/dashboard",
      element: <DashboardLayout/>,
      children:[
        
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadItem/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageItem/>
        },
        // {
        //   path:"/admin/dashboard/edit-books/:id",
        //   element:<EditItem/>,
        //   loader:({params}) => fetch('http://localhost:5000/book/${params.id}')
        // }

        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditItem/>,
          loader: async ({params}) => {
            try {
              const response = await fetch(`http://localhost:5000/book/${params.id}`);
              if (!response.ok) {
                throw new Error(`Failed to fetch book ${params.id}: ${response.status}`);
              }
              return response.json();
            } catch (error) {
              console.error(error);
              throw error;
            }
          }
        }
      ]
    },
    {
      path:"sign-up",
      element:<SignUp/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element: <Logout/>
    }
  ]);
  
  export default router