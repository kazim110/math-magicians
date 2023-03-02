import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Math Magicians</h1>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quote">Qoute</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
    </div>
  </nav>
);
export default Navbar;
