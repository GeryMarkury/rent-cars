import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import css from "./SharedLayout.module.scss";

export const SharedLayout = () => {

  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
        <NavLink to="/" end className={({ isActive }) =>
    isActive ? css.active : css.navLink
  }>
          Home
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) =>
    isActive ? css.active : css.navLink
  }>Catalog</NavLink>
        <NavLink to="/favorites" className={({ isActive }) =>
    isActive ? css.active : css.navLink
  }>Favorites</NavLink>
        </nav>
      </header>
        <Outlet />
    </div>
  );
};