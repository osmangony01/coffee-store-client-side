import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import ViewCoffee from "../components/ViewCoffee/ViewCoffee";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/coffee")
            },
            {
                path: '/add-coffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/coffee/:id",
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])

export default router;