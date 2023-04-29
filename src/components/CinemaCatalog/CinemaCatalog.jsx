import { Link } from 'react-router-dom';
import CinemaCard from 'components/CinemaCard/CinemaCard';
import styles from './CinemaCatalog.module.css';

const CinemaCatalog = ({ data }) => {
 return (
  <div className={styles.CinemaCatalog}>
   {data.map(item => (
    <Link className={styles.CinemaCard} key={item.id} to={`/movies/${item.id}`}>
     <CinemaCard movie={item} />
    </Link>
   ))}
  </div>
 );
};

export default CinemaCatalog;
