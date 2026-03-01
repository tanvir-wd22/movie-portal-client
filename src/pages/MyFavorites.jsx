import FavoriteMovieCard from '../components/FavoriteMovieCard';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthContextProvider';
import toast from 'react-hot-toast';

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [favoritesList, setFavoritesList] = useState([]);

  const handleDeleteFavoriteMovie = async (id) => {
    // console.log(id);
    const response = await fetch(
      `https://movie-portal-server-931s.onrender.com/favMovies/${id}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data.deletedCount > 0) {
      toast.success('deleted from favorites done');
    }
    const remainingList = favoritesList.filter(
      (movieItem) => movieItem._id !== id
    );
    setFavoritesList(remainingList);
  };

  // ===============================================
  //      😕 What is the difference?

  // // req.params  → used when email is INSIDE the route path
  // GET /favMovies/alice@gmail.com
  //                ↑
  //                this is params

  // // req.query  → used when email is AFTER ? in the URL
  // GET /favMovies?email=alice@gmail.com
  //                ↑
  //                this is query
  // ===============================================

  useEffect(() => {
    fetch(
      `https://movie-portal-server-931s.onrender.com/favMovies?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFavoritesList(data);
      });
  }, [user?.email]);

  // console.log(favoritesList);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Your Favorite List : {favoritesList.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {favoritesList.map((movieItem) => (
          <FavoriteMovieCard
            key={movieItem._id}
            movieItem={movieItem}
            handleDeleteFavoriteMovie={handleDeleteFavoriteMovie}
          ></FavoriteMovieCard>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
