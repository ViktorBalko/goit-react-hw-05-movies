import styles from 'components/CinemaLoader/CinemaLoader.module.css';

export function CinemaLoader() {
 return (
  <>
   <div id="loop" className={styles.center}></div>
   <div id="bike-wrapper" className={styles.center}>
    <div id="bike" className={styles.centerBike}></div>
   </div>
  </>
 );
}

export default CinemaLoader;
