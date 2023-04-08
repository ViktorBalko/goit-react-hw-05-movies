import { Link } from 'react-router-dom';

export const CinemaSearch = () => {
 return (
  <div>
   <p>Find your Film!</p>
   {/* <input></input> */}
   {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
    return (
     <Link key={film} to={`${film}`}>
      {film}
     </Link>
    );
   })}
  </div>
 );
};

export default CinemaSearch;
