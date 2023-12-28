import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Slider from "../components/slider/Slider";
import Sliders from "../components/slider2/Sliders";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'slider',
                element:<Slider></Slider>
            },
            {
                path:'/sliders',
                element:<Sliders></Sliders>
            }
        ]
    }
])

export default router;