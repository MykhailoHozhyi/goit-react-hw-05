import { useState } from 'react';

export default function SearchMovieForm({ onSubmit }) {
  const [searchMovie, setSearchMovie] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target.elements.searchMovie.value;
    setSearchMovie(searchValue);

    onSubmit(searchValue);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchMovie" />
      <button type="submit">Search</button>
    </form>
  );
}
