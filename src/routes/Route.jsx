import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../components/layout/Layout";
import Mapa from "../pages/MapView";
import Team from "../pages/team/Team";
import ContactForm from "../pages/ContactForm";

// Comentarios fuera del objeto de rutas
// Rutas comentadas para futuras implementaciones:
// const rutasComentadas = [
//   { path: "/zonas", element: <ZonasAfectadas /> },
//   { path: "/mapa", element: <Mapa /> },
//   { path: "/user", element: <User /> },
// ];

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
