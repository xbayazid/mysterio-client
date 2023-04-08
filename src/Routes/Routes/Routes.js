import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Men from "../../Pages/Men/Men";
import Women from "../../Pages/Women/Women";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import SignUp from "../../Pages/SignUp/SignUp";
import Payment from "../../Pages/Payment/Payment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }, 
            {
                path: '/men',
                element: <Men/>
            },
            {
                path: '/women',
                element: <Women/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element:<SignUp/>
            },
            {
                path: '/details',
                element: <ProductDetails/>
            },
            {
                path: '/checkout',
                element: <CheckOut/>
            },
            {
                path: '/payment',
                element: <Payment/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/myorder',
                element: <MyOrders/>
            }
        ]
    }
]);
export default router;