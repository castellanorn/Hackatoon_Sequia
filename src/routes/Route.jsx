import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Layout from "../components/layout/Layout";
import Zonas from "../pages/Zonas";
import Mapa from "../pages/Mapa";
import User from "../pages/User";
import Tips from "../pages/Tips";
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
        { path: "/", element: <Zonas /> },
        { path: "/", element: <Mapa /> },        
        { path: "/user", element: <User /> },
        { path: "/tips", element: <Tips /> },        
        { path: "/team", element: <Team /> },
        { path: "/contact", element: <ContactForm /> },
    
    ],
  },
]);

export default router;
