import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingPage from "../Pages/LandingPage/LandingPage";

export const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    children:[
        {
            path:'/',
            element:<LandingPage/>
        },

         {
            path:'/home',
            element:<LandingPage/>
        },
        
    ]
}])