import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById, imgBaseURL } from '../../movies-api';
import { defaultImg } from '../../defaultImg';

export default function MovieCast() {
  const [movieCastById, setMovieCastById] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieCastById(movieId) {
      try {
        setError('');
        setLoader(true);
        const { cast } = await getMovieCastById(movieId);
        setMovieCastById(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchMovieCastById(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {loader && <p>Loading...</p>}

      <ul>
        {movieCastById.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${imgBaseURL}${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={100}
              />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
