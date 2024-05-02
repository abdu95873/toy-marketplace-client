import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "../Routers/PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import EditToys from "../Pages/MyToys/EditToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://toy-marketplace-server-two.vercel.app/trucks')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-marketplace-server-two.vercel.app/trucks')
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/addtoys",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
      },
      {
        path: "/edit/:id",
        element: <PrivateRoute><EditToys></EditToys></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`https://toy-marketplace-server-two.vercel.app/trucks?id=${params?.id}`)
        }
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/toy/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => {
          return fetch(`https://toy-marketplace-server-two.vercel.app/trucks?id=${params?.id}`)
        }
      },

    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },

]);

export default router;