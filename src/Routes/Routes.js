import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import SingleService from "../pages/SingleService/SingleService";
import UpdateReview from "../pages/UpdateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path :'/',
        element : <Main />,
        children :[
            {
                path:'/',
                element:<Home />,
            },
            {
                path:'/services',
                element:<Services />,
            },
            {
                path:'/services/:id',
                element:<SingleService />,
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews /></PrivateRoute>,
            },
            {
                path:'/myreviews/edit/:id',
                element:<PrivateRoute><UpdateReview/></PrivateRoute>,
                
            },
            {
                path:'/addnewservice',
                element:<PrivateRoute><AddService /></PrivateRoute>,
            },
            {
                path: 'login',
                element:<Login />,
            },
            {
                path:'/register',
                element:<Register />,
            },
            {
                path:'/blogs',
                element:<Blog />,
            }
        ]
    }
])