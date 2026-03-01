import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContextProvider';

const MovieCardDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const secondUserEmail = user?.email;
  // console.log(secondUserEmail);
  const loadedOneMovie = useLoaderData();
  // console.log(loadedOneMovie);
  const navigate = useNavigate();
  // console.log(navigate);

  const handleAddToFavorites = async (movieInfo) => {
    // console.log(movieInfo);
    // ✅ Always remove _id before inserting into a new collection
    const { _id, firstUserEmail, ...withoutFirstUserIdEmail } = movieInfo;
    // console.log(_id, firstUserEmail);
    toast.success(`first user ${firstUserEmail} & ${_id} `);
    const favoriteMovieInfo = { ...withoutFirstUserIdEmail, secondUserEmail };
    // console.log(favoriteMovieInfo);
    const response = await fetch(`http://localhost:5000/favMovies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favoriteMovieInfo),
    });
    const data = await response.json();
    // console.log(data);
    if (data.insertedId) {
      toast.success('add to favorites list done');
    }
  };

  const handleDeleteMovie = async (id) => {
    // console.log(id);
    const res = await fetch(`http://localhost:5000/movies/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    // console.log(data);
    if (data.deletedCount > 0) {
      toast.success('delete movie successfully');
      navigate('/allMovies');
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={loadedOneMovie?.poster}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{loadedOneMovie?.title}</h1>
            <p>{loadedOneMovie?.summary}</p>
            <p>Release Year : {loadedOneMovie?.release}</p>
            <p>Duration : {loadedOneMovie?.duration} minutes</p>
            <p>Genre : {loadedOneMovie?.genre}</p>
            <p>Rating : {loadedOneMovie?.rating}</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleAddToFavorites(loadedOneMovie)}
                className="btn btn-success"
              >
                Add To Favorites
              </button>
              <button
                onClick={() => handleDeleteMovie(loadedOneMovie?._id)}
                className="btn btn-error"
              >
                Delete From Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
