import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../components/layout/Layout";
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
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <ContactForm />,
            },
            
        ],
    },
]);

export default router;