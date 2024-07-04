
import { NavLink, Link } from "react-router-dom/dist"


const NavBar = () => {
  return (
  <header className="w-full h-20 mt- auto bg-navbar flex items-center justify-between">
  <img src="../../assets/react.svg"></img>
  <h1 className= "text-5xl logo-text">SEQUIATRON</h1>
  <navbar className="flex gap-7 text-text text-3xl">
    <Link>Inicio</Link>
    <Link>Zonas Afectadas</Link>
    <Link>Tips</Link>
    <Link>Mapa</Link>
    <Link>User</Link>
  </navbar>
  
  
  
  </header>
  )
}

export default NavBar