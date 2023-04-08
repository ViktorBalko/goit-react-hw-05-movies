import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './SharedLayout.module.css';
import Loader from 'components/CinemaLoader/CinemaLoader';

export const SharedLayout = () => {
 return (
  <div>
   <header className={styles.header}>
    {/* <nav className={styles.nav}>
     <Link to="/" className={styles.link}>
      Home
     </Link>
     <Link to="/movie" className={styles.link}>
      Movie
     </Link>
    </nav> */}
    <ul className="Navigations">
     <li className="NavigationsItem">
      <NavLink className="NavigationsButton" to="/">
       <span>Trending Films</span>
      </NavLink>
     </li>
     <li className="NavigationsItem">
      <NavLink className="NavigationsButton" to="/search">
       <span>Search Film</span>
      </NavLink>
     </li>
    </ul>
   </header>
   <Suspense fallback={<Loader />}>
    <Outlet />
   </Suspense>
  </div>
 );
};

export default SharedLayout;
