import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from '../../movies-api';

export default function MovieReviews() {
  const [movieReviewsById, setMovieReviewsById] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieReviewsById(movieId) {
      try {
        setError('');
        setLoader(true);
        const { results } = await getMovieReviewsById(movieId);
        setMovieReviewsById(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }

    fetchMovieReviewsById(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {loader && <p>Loading...</p>}

      <ul>
        {movieReviewsById.map(review => {
          return (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
