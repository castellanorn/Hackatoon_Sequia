//import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Menu from "../common/Menu"

const NavBar = () => {
  //const [menu, setMenu] = useState(false)
  return (
 
  <header className="w-auto h-20 px-4 py-2 mt-auto gap-1 bg-navbar flex justify-start items-center">
    <img src="../../assets/images/favicon.ico.png" className="px-4 " >
    </img>
    <h1 className= "text-5xl logo-text font-serif">SEQUIATRON</h1>
    <menu className="text-white scale-150 items-center px-4 lg:hidden" >
      <HiBars3  />
    </menu>
    <navbar className="flex gap-7 px-4 mx-4 text-text text-xl hidden lg:flex lg:justify-end">
      <Menu />
    </navbar>
  </header>
  )
}

export default NavBar