import styles from './CinemaCard.module.css';
import { Link } from 'react-router-dom';

const CinemaCard = ({ movie }) => {
 return (
  <div className={styles.CinemaCard}>
   <Link to={`/details/${movie.id}`}>
    <img
     className={styles.CinemaCardImage}
     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
     alt={movie.title}
    />
   </Link>
   <div className={styles.CinemaCardInfo}>
    <h2 className={styles.CinemaCardTitle}>{movie.title}</h2>
    <p className={styles.CinemaCardOverview}>{movie.overview}</p>
   </div>
  </div>
 );
};

export default CinemaCard;

// import styles from './CinemaCard.module.css';

// const CinemaCard = ({ movie }) => {
//  return (
//   <div key={movie.id} className={styles.CinemaCard}>
//    <img
//     className={styles.CinemaCardImage}
//     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//     alt={movie.title}
//    />
//    <div className={styles.CinemaCardInfo}>
//     <h2 className={styles.CinemaCardTitle}>{movie.title}</h2>
//     <p className={styles.CinemaCardOverview}>{movie.overview}</p>
//    </div>
//   </div>
//  );
// };

// export default CinemaCard;

// import styles from 'components/CinemaCard/CinemaCard.module.css';

// const CinemaCard = () => {
//  //  return <div>CinemaDetails</div>;
//  return (
//   <main>
//    <div className={styles.CinemaCardBox}>
//     <img
//      src="https://images7.alphacoders.com/117/1171194.png"
//      alt=""
//      width={'300px'}
//     />
//     <h2 className={styles.CinemaCardTitle}>Movie title</h2>
//     <p className={styles.CinemaCardSubtitle}>
//      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea accusamus
//      omnis quidem veritatis laborum molestias, eum labore, quisquam autem culpa?
//      Delectus sapiente tempore, mollitia minus quisquam sint vero minima!
//     </p>
//    </div>
//   </main>
//  );
// };

// export default CinemaCard;
