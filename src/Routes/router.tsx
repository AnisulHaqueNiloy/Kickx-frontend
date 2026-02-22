import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingPage from "../Pages/LandingPage/LandingPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

export const router = createBrowserRouter([{
    path:'/',
    element:<MainLayout />,
    children:[
        {
            path:'/',
            element:<LandingPage/>
        },

        

         {
            path:'/product/:id',
            element:<ProductPage/>
        },
        
    ]
}])