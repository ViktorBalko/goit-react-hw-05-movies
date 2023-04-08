import { React } from 'react';
import styles from './CinemaCatalog.module.css';
import CinemaCard from 'components/CinemaCard/CinemaCard';

const CinemaCatalog = ({ data }) => {
 return (
  <div className={styles.CinemaCatalog}>
   {data.map(item => (
    <CinemaCard key={item.id} movie={item} />
   ))}
  </div>
 );
};

export default CinemaCatalog;

// import styles from './CinemaCatalog.module.css';

// const CinemaCatalog = ({ data }) => {
//  return (
//   <div className={styles.CinemaCatalog}>
//    {data.map(item => (
//     <div key={item.id} className={styles.CinemaCatalogItem}>
//      <img
//       className={styles.CinemaCatalogItemImage}
//       src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
//       alt={item.title}
//      />
//      <div className={styles.CinemaCatalogItemInfo}>
//       <h2 className={styles.CinemaCatalogItemTitle}>{item.title}</h2>
//       <p className={styles.CinemaCatalogItemOverview}>{item.overview}</p>
//      </div>
//     </div>
//    ))}
//   </div>
//  );
// };

// export default CinemaCatalog;

// import styles from 'components/CinemaCatalog/CinemaCatalog.module.css';

// export const CinemaCatalog = () => {
//  return (
//   <div>
//    <ul className={styles.CinemaCatalogBox}>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//     <li className={styles.CinemaCatalogExample}>Cinema in Trend</li>
//    </ul>
//   </div>
//  );
// };

// export default CinemaCatalog;
