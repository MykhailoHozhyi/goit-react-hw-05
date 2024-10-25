import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchMovieForm from '../../components/SearchMovieForm/SearchMovieForm';
import { useSearchParams } from 'react-router-dom';
import { getMovieByValue } from '../../movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchMovie = searchParams.get('query');

    if (!searchMovie) {
      return;
    }

    async function fetchSearchMovie() {
      try {
        setError('');
        setLoader(true);
        const { results } = await getMovieByValue(searchMovie);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchSearchMovie();
  }, [searchParams]);

  function onSubmit(searchMovie) {
    setSearchParams({ query: searchMovie });
  }

  return (
    <div>
      <h1>Search movie</h1>

      <SearchMovieForm onSubmit={onSubmit} />

      {error && <p>{error}</p>}
      {loader && <p>Loading...</p>}

      <MovieList movies={movies} />
    </div>
  );
}
