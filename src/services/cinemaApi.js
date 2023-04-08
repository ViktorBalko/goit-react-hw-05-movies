// import APIKEY from './apiKey';
const APIKEY = '1b2889cb9070b2b87d6c245529d0461a';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// export const fetchTrends = async () => {
//  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
//  const response = await fetch(url);
//  return await response.json();
// };
// export default fetchTrends;

// пошук фільму за ключовим словом на сторінці фільмів.
// export const fetchSearch = async query => {
//  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;
//  const response = await fetch(url);
//  return await response.json();
// };

// запит повної інформації про фільм для сторінки кінофільму.
// export const fetchDetails = async id => {
//  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
//  const response = await fetch(url);
//  return await response.json();
// };

// const APIKEY = '1b2889cb9070b2b87d6c245529d0461a';

export const fetchTrends = async () => {
 const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
 const response = await fetch(url);
 return await response.json();
};

export const fetchDetails = async id => {
 const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`;
 const response = await fetch(url);
 return await response.json();
};

// export default fetchDetails;

// запит інформації про акторський склад для сторінки кінофільму.
// export const fetchCredit = async id => {
//  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`;
//  const response = await fetch(url);
//  return await response.json();
// };

// запит оглядів для сторінки кінофільму.
// export const fetchReviews = async id => {
//  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`;
//  const response = await fetch(url);
//  return await response.json();
// };
