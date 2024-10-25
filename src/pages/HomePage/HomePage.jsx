import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovie } from '../../movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError('');
        setLoader(true);
        const { results } = await getTrendingMovie();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      {loader && <p>Loading...</p>}

      <MovieList movies={movies} />
    </div>
  );
}
