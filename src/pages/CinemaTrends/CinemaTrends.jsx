import { useState, useEffect } from 'react';
import CinemaCatalog from 'components/CinemaCatalog';
// import CinemaDetails from 'pages/CinemaDetails';
import styles from 'pages/CinemaTrends/CinemaTrends.module.css';
import { fetchTrends } from 'services/cinemaApi';

export const CinemaTrends = () => {
 const [trends, setTrends] = useState([]);

 useEffect(() => {
  const getTrends = async () => {
   const data = await fetchTrends();
   setTrends(data.results);
  };
  getTrends();
 }, []);

 return (
  <div className={styles.CinemaTrendsBox}>
   <h1 className={styles.CinemaTrendsTitle}>Cinema Trends</h1>
   {/* <CinemaDetails /> */}
   <CinemaCatalog data={trends} />
  </div>
 );
};

export default CinemaTrends;

// import CinemaCatalog from 'components/CinemaCatalog';
// import styles from 'pages/CinemaTrends/CinemaTrends.module.css';
// import

// export const CinemaTrends = () => {

//  return (
//   <div className={styles.CinemaTrendsBox}>
//    <h1 className={styles.CinemaTrendsTitle}>Cinema Trends</h1>
//    {<CinemaCatalog />}
//   </div>
//  );
// };

// export default CinemaTrends;
