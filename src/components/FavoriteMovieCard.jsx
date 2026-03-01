const FavoriteMovieCard = ({ movieItem, handleDeleteFavoriteMovie }) => {
  // console.log(movieItem);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-96">
        <figure>
          <img src={movieItem?.poster} className="h-40 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {movieItem?.title}
            <div className="badge badge-secondary">{movieItem?.rating}</div>
          </h2>
          <p>{movieItem?.summary}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-xs badge-outline">
              Duration : {movieItem?.duration}
            </div>
            <div className="badge badge-xs badge-outline">
              Genre : {movieItem?.genre}
            </div>
            <div className="badge badge-xs badge-outline">
              Release :{movieItem?.release}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleDeleteFavoriteMovie(movieItem?._id)}
              className="btn btn-sm btn-error"
            >
              Delete Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteMovieCard;
