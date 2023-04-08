import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <ul className="NavLinkBox">
        <li className="NavLinkItem">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
        </li>

        <li className="NavLinkItem">
          <NavLink to="/Search">
            <span>Search</span>
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
