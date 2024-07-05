import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Menu from "../Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between w-full h-20 px-4 bg-navbar">
      <div className="flex items-center">
        <img
          src="../../../images/faviconico.png"
          alt="Logo"
          className="w-12 mr-4"
        />
        <h1 className="font-serif text-2xl text-logo-text">SEQUIATRON</h1>
      </div>
      <div className="lg:hidden" onClick={() => setMenu(!menu)}>
        <HiBars3 className="text-2xl text-white" />
      </div>
      <nav className={`fixed inset-0 bg-navbar bg-opacity-95 transform ${menu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:static lg:bg-transparent lg:translate-x-0 lg:flex lg:w-auto lg:p-0`}>
        <div className="flex justify-end lg:hidden">
          <button className="p-4 text-2xl text-white" onClick={() => setMenu(false)}>
            &times;
          </button>
        </div>
        <Menu closeMenu={() => setMenu(false)} />
      </nav>
    </header>
  );
};

export default NavBar;