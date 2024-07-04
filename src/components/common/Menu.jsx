import { Link } from "react-router-dom/dist"


const Menu = () => {
  return (
    <navbar className="flex gap-7 px-4 mx-4 text-text text-xl ">
    <Link to="../../home.jsx">Inicio</Link>
    <Link to="../../pages/Zonas.jsx">Zonas Afectadas</Link>
    <Link to="../../pages/Tips.jsx">Tips</Link>
    <Link to="../../pages/Mapa.jsx">Mapa</Link>
    <Link to="../../pages/User.jsx">User</Link>
  </navbar>
  )
}

export default Menu