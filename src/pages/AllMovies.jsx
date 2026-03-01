import { useLoaderData } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';

const AllMovies = () => {
  const loadedAllMovies = useLoaderData();
  // console.log(loadedAllMovies);
  const [allMovies, setAllMovies] = useState(loadedAllMovies);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch(
      `https://movie-portal-server-931s.onrender.com/movies?search=${searchInput}`
    )
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
    //  ✅ store in allMovies, not searchInput
  }, [searchInput]);

  // console.log(searchInput);
  // console.log(allMovies);

  return (
    <div>
      <div className="flex justify-center items-center mb-6">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search By Title"
          />
        </label>
      </div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        All Movies Here : {allMovies.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allMovies.map((movieItem) => (
          <MovieCard key={movieItem._id} movieItem={movieItem}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
