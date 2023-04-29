// import { React } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'services/cinemaApi';
import styles from 'pages/CinemaDetails/CinemaDetails.module.css';

export function CinemaDetails() {
 const { id } = useParams();
 const [details, setDetails] = useState(null);

 useEffect(() => {
  const getDetails = async () => {
   const response = await fetchDetails(id);
   setDetails(response);
   // console.log(details);
  };
  getDetails();
 }, [id]);

 if (!details) {
  return <p>Loading...</p>;
 }

 return (
  <div className={styles.CinemaDetailsBox}>
   <img
    className={styles.CinemaDetailsImage}
    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
    alt={details.title}
   />
   <div className={styles.CinemaDetails}>
    <ul className={styles.CinemaDetailsList}>
     <li className={styles.CinemaDetailsItem}>
      <h2 className={styles.CinemaDetailsTitle}>{details.title}</h2>
     </li>
     <li className={styles.CinemaDetailsItem}>
      <p className={styles.CinemaDetailsParagraph}>
       Overwiev: {details.overview}
      </p>
     </li>
    </ul>

    <ul className={styles.CinemaDetailsList}>
     <li className={styles.CinemaDetailsItem}>
      <p className={styles.CinemaDetailsRelease}>
       Release date: {details.release_date}
      </p>
     </li>
     <li>
      <button>Cast</button>
     </li>

     <li>
      <button>Reviews</button>
     </li>
    </ul>
   </div>
  </div>
 );
}

export default CinemaDetails;
