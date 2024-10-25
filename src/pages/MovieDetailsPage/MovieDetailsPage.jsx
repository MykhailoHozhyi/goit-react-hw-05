import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById, imgBaseURL } from '../../movies-api';
import { defaultImg } from '../../defaultImg';

export default function MovieDetailsPage() {
  const [movieById, setMovieById] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieById(movieId) {
      try {
        setError('');
        setLoader(true);
        const movieData = await getMovieById(movieId);
        setMovieById(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchMovieById(movieId);
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/movies');

  return (
    <div>
      {error && <p>{error}</p>}
      {loader && <p>Loading...</p>}

      <Link to={backLinkHref.current}>Go back</Link>
      <h1>{movieById.title}</h1>
      <img
        src={
          movieById.poster_path
            ? `${imgBaseURL}${movieById.poster_path}`
            : defaultImg
        }
        alt={movieById.title}
        width={250}
      />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
