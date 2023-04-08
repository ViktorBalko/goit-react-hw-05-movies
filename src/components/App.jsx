// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link, useState, useEffect } from 'react';
// import { fetchTrends } from 'services/cinemaApi';
// import CinemaTrends from 'pages/CinemaTrends/CinemaTrends';
// import CinemaSearch from 'pages/CinemaSearch/CinemaSearch';
// import CinemaDetails from 'pages/CinemaDetails/CinemaDetails';
// import CinemaCatalog from 'components/CinemaCatalog/CinemaCatalog';

// export function App() {
//  const [data, setData] = useState([]);

//  useEffect(() => {
//   const fetchData = async () => {
//    const data = await fetchTrends();
//    setData(data);
//   };

//   fetchData();
//  }, []);

//  return (
//   <Router>
//    <div>
//     <ul>
//      <li>
//       <Link to="/">Trending Films</Link>
//      </li>
//      <li>
//       <Link to="/search">Search Film</Link>
//      </li>
//     </ul>

//     <Routes>
//      <Route path="/" element={<CinemaCatalog data={data} />} />
//      <Route path="/search" element={<CinemaSearch />} />
//      <Route path="/movies/:id" element={<CinemaDetails />} />
//     </Routes>
//    </div>
//   </Router>
//  );
// }

// export default App;

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
    {/* <li className="NavigationsItem">
     <NavLink className="NavigationsButton" to="/search">
      <span>Search Film</span>
     </NavLink>
    </li> */}
   </ul>

   <Routes>
    <Route path="/" element={<CinemaTrends />} />
    {/* <Route path="/search" element={<CinemaSearch />} /> */}
    <Route path="/movies/:id" element={<CinemaDetails />} />
   </Routes>
  </div>
 );
};
