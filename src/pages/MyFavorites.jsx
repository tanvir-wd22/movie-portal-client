import { useLoaderData } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard';

const MyFavorites = () => {
  const loadedFavMovies = useLoaderData();
  // console.log(loadedFavMovies);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedFavMovies.map((movieItem) => (
          <FavoriteCard
            key={movieItem._id}
            movieItem={movieItem}
          ></FavoriteCard>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
