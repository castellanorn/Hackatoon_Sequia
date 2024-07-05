import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../components/layout/Layout";
import Team from "../pages/Team";
import Mapa from "../pages/MapView";
import ContactForm from "../pages/ContactForm";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/team", element: <Team /> },
            { path: "/contact", element: <ContactForm /> },
            { path: "/mapa", element:<Mapa />
            }

        ]
    }
])

export default router;
