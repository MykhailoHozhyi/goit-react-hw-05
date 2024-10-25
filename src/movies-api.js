import axios from 'axios';

export const imgBaseURL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjE2MmQ3OTU5MTYzNDYxMzgzYzEwNmFiNmEyN2QxNyIsIm5iZiI6MTcyOTUwNDU2MC4zMzM3NDMsInN1YiI6IjY3MTYyMDg2OTk0MzYzN2NlNTgyYTkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuITpVbB-5TfB71AxqWVe13Z9pOVBiFv6XDnllkpRN8',
  },
};

export async function getTrendingMovie() {
  const { data } = await axios.get('/trending/movie/day', options);
  return data;
}

export async function getMovieById(id) {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
}

export async function getMovieCastById(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data;
}

export async function getMovieReviewsById(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data;
}

export async function getMovieByValue(searchMovie) {
  const { data } = await axios.get(
    `/search/movie?query=${searchMovie}`,
    options
  );
  return data;
}
