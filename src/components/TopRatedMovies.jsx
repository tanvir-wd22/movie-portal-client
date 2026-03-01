import { Link } from 'react-router-dom';
import TopRatedMovieCard from './TopRatedMovieCard';

const TopRatedMovies = ({ loadedTopMovies }) => {
  // console.log(loadedTopMovies);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedTopMovies.map((movieItem) => (
          <TopRatedMovieCard
            movieItem={movieItem}
            key={movieItem._id}
          ></TopRatedMovieCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link to="/allMovies" className="btn btn-primary">
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default TopRatedMovies;
