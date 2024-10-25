import { Link, useLocation } from 'react-router-dom';
import { imgBaseURL } from '../../movies-api';
import { defaultImg } from '../../defaultImg';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={
                  movie.poster_path
                    ? `${imgBaseURL}${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                width={250}
              />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
