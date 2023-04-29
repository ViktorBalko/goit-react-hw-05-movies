import styles from './CinemaCard.module.css';
import { Link } from 'react-router-dom';

const CinemaCard = ({ movie }) => {
 return (
  <div className={styles.CinemaCardL}>
   <Link className={styles.CinemaCard} to={`/details/${movie.id}`}>
    <img
     className={styles.CinemaCardImage}
     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
     alt={movie.title}
    />
   </Link>
  </div>
 );
};

export default CinemaCard;
