import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Men from "../../Pages/Men/Men";
import Women from "../../Pages/Women/Women";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

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
                path: '/details',
                element: <ProductDetails/>
            }
        ]
    }
]);
export default router;