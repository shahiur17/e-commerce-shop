import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorit from "../Pages/Favorite/Favorit";
import Login from "../Pages/Login/Login";



const myCreatedRouter = createBrowserRouter ([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/favorite",
                element : <Favorit></Favorit>
            },
            {
                path : "/login",
                element :<Login></Login>
            }
        ]
    }
])


export default myCreatedRouter;