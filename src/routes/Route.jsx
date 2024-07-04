import { createBrowserRouter } from "react-router-dom";
/*import Home from "../home";*/
import Layout from "../components/layout/Layout";
import Team from "../pages/team/Team";


export const router = createBrowserRouter ([
    {
        path:"/",
        element:<Layout />,
        children: [
            /* {
                path: "/",
                element:<Home />
            }, */
            {
                path: "/team",
                element:<Team />
            },
            /*  {
                path: "/mapa",
                element:<Mapa />
            },
            {
                path: "/user",
                element:<User />
            } */
        ]
    },
])
export default router;