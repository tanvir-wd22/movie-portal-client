import { Link } from 'react-router-dom';

const TopRatedMovieCard = ({ movieItem }) => {
  // console.log(movieItem);
  return (
    <div>
      <div className="card bg-gray-200 shadow-sm h-96">
        <figure className="px-10 pt-10">
          <img
            src={movieItem?.poster}
            alt="movie"
            className="rounded-xl h-40 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex justify-center items-center gap-2">
            <h2 className="card-title"> {movieItem?.title}</h2>
            <div className="badge badge-warning">{movieItem?.rating}</div>
          </div>
          <p className="text-justify">{movieItem?.summary}</p>

          <div className="card-actions">
            <Link
              to={`/movieCardDetails/${movieItem?._id}`}
              className="btn btn-info"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovieCard;
