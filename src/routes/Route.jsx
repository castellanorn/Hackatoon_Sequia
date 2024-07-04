import { createBrowserRouter } from "react-router-dom";
/*import Home from "../home";*/
import Layout from "../components/layout/Layout";
import Mapa from "../pages/MapView";

export const router = createBrowserRouter ([
    {
        path:"/",
        element:<Layout />,
        children: [
            {
                path: "/mapa",
                element:<Mapa />
            }
        ]
    },
])
export default router;