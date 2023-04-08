import { NavLink, Routes, Route } from 'react-router-dom';
// import SharedLayout from './SharedLayout/';
import CinemaTrends from 'pages/CinemaTrends';
import CinemaSearch from 'pages/CinemaSearch';
import CinemaDetails from 'pages/CinemaDetails';

export const App = () => {
 return (
  <div>
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

   <Routes>
    <Route path="/" element={<CinemaTrends />} />
    <Route path="/search" element={<CinemaSearch />} />
    {/* <Route path="/search/:id" element={<CinemaDetails />} /> */}
    <Route path="/search/:id" element={<CinemaDetails />} />
   </Routes>
  </div>
 );
};
