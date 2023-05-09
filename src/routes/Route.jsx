import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/add-coffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])

export default router;