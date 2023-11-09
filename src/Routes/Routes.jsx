import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Details from "../Pages/Details/Details";
import DetailedCard from "../Componenets/DetailedCard/DetailedCard";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";
import ManageSingleCard from "../Componenets/ManageSingleCard/ManageSingleCard";
import MyFoodReq from "../Pages/MyFoodReq/MyFoodReq";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/foods')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/addfoods',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path: '/availablefoods',
          element: <PrivateRoute><AvailableFoods></AvailableFoods></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/food/:_id',
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/food/:_id',
          element: <PrivateRoute><DetailedCard></DetailedCard></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/managemyfoods',
          element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/manage/:id',
          element: <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/reqfood')
        },
        {
          path: '/manage/:id',
          element: <PrivateRoute><ManageSingleCard></ManageSingleCard></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/foodrequest',
          element: <PrivateRoute><MyFoodReq></MyFoodReq></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/reqfood')
        }
        
      ]
    },
  ]);

export default router