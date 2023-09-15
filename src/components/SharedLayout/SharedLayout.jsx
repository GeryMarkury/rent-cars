import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      </header>
        <Outlet />
    </div>
  );
};