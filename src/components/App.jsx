import { NavLink, Routes, Route } from 'react-router-dom';
// import SharedLayout from './SharedLayout/';
import CinemaTrends from 'pages/CinemaTrends';
import CinemaSearch from 'pages/CinemaSearch';
import CinemaDetails from 'pages/CinemaDetails';
import { Logo } from 'services/Logo';

export const App = () => {
 return (
  <div className="CinemaHeader">
   <ul className="Navigations">
    <li className="NavigationsItem">
     <NavLink className="NavigationsButton" to="/">
      <span>Trending Films</span>
     </NavLink>
    </li>
    <Logo />
    <li className="NavigationsItem">
     <NavLink className="NavigationsButton" to="/search">
      <span>Search Film</span>
     </NavLink>
    </li>
   </ul>
   <container>
    <Routes>
     <Route path="/" element={<CinemaTrends />} />
     <Route path="/search" element={<CinemaSearch />} />
     <Route path="/details/:id" element={<CinemaDetails />} />
    </Routes>
   </container>
  </div>
 );
};
