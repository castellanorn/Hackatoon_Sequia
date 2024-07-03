import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../components/layout/Layout";


export const router = createBrowserRouter ([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/tracker",
        element:< Layout />,
    }
])

export default router