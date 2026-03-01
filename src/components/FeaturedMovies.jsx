import FeaturedMovieCard from './FeaturedMovieCard';

const FeaturedMovies = ({ loadedTopMovies }) => {
  console.log(loadedTopMovies);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedTopMovies.map((movieItem) => (
          <FeaturedMovieCard
            movieItem={movieItem}
            key={movieItem._id}
          ></FeaturedMovieCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
