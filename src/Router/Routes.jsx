
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import AddItem from "../Home/AddItem";
import MyList from "../Home/MyList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllItems from "../Home/AllItems";
import PrivateRoute from "./PrivateRoute";

const Routes = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all_items",
                element: <AllItems></AllItems>
            },
            {
                path: "/add_item",
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: "/my_list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default Routes;