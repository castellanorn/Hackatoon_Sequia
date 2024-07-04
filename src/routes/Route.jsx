import { createBrowserRouter } from "react-router-dom";
/*import Home from "../home";*/
import Layout from "../components/layout/Layout";


export const router = createBrowserRouter ([
    {
        path:"/",
        element:<Layout />,
        /*children: [
            {
                path: "/",
                element:<Home />
            },
            {
                path: "/zonas",
                element:<ZonasAfectadas />
            },
            {
                path: "/mapa",
                element:<Mapa />
            },
            {
                path: "/user",
                element:<User />
            }
        ]*/
    },
])
export default router;