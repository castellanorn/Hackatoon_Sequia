import { Link } from "react-router-dom/dist"


const Menu = () => {
  return (
    <navbar className="flex gap-7 px-4 mx-4 text-text text-xl ">
    <Link to="/">Inicio</Link>
    <Link to="/zonas">Zonas Afectadas</Link>
    <Link to="/tips">Tips</Link>
    <Link to="/mapa">Mapa</Link>
    <Link to="/user">User</Link>
  </navbar>
  )
}

export default Menu