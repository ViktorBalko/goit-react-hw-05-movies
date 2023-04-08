// import { React } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'services/cinemaApi';

export function CinemaDetails() {
 const { id } = useParams();
 const [details, setDetails] = useState(null);

 useEffect(() => {
  const getDetails = async () => {
   const response = await fetchDetails(id);
   setDetails(response);
  };
  getDetails();
 }, [id]);

 if (!details) {
  return <p>Loading...</p>;
 }

 return (
  <div>
   <h2>{details.title}</h2>
   <p>{details.overview}</p>
   <p>Release date: {details.release_date}</p>
   <p>Vote average: {details.vote_average}</p>
   <p>Vote count: {details.vote_count}</p>
  </div>
 );
}

export default CinemaDetails;
