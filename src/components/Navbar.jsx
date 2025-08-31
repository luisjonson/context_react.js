import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/produto">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
    </div>
  );
};

export default Navbar;
