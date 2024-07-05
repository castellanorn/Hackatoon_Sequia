import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../home";
import ContactForm from "../pages/ContactForm";
import Mapa from "../pages/MapView";
import Team from "../pages/Team";
import Tips from "../pages/Tips";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/team", element: <Team /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/mapa", element: <Mapa /> },
      { path: "/tips", element: <Tips /> },
    ],
  },
]);

export default router;
