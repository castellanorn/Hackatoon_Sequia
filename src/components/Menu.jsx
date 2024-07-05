import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Menu = ({ closeMenu }) => {
  return (
    <ul className="flex flex-col items-start mt-8 space-y-4 lg:space-y-0 lg:mt-0 lg:flex-row lg:items-center lg:space-x-8">
      <li><Link to="/" className="text-xl text-text hover:underline" onClick={closeMenu}>Inicio</Link></li>
      <li><Link to="/zonas" className="text-xl text-text hover:underline" onClick={closeMenu}>Zonas Afectadas</Link></li>
      <li><Link to="/tips" className="text-xl text-text hover:underline" onClick={closeMenu}>Tips</Link></li>
      <li><Link to="/mapa" className="text-xl text-text hover:underline" onClick={closeMenu}>Mapa</Link></li>
      <li><Link to="/user" className="text-xl text-text hover:underline" onClick={closeMenu}>User</Link></li>
    </ul>
  );
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;