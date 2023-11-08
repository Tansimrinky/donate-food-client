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
        }
      ]
    },
  ]);

export default router