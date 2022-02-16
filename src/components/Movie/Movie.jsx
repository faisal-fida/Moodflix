import "./movie.scss"
import Fallback from "../Fallback/Fallback";
import { BASE_IMG_URL } from "../../requests";

const Movie = (props) => {
  const { title, original_name, original_title, name, voteAverage, posterPath } = props;
  let fallbackTitle = title || original_title || name || original_name;

  return (
    <div className='movie'>
      {posterPath ? (
        <img src={`${BASE_IMG_URL}/${posterPath}`} alt={fallbackTitle} />
      ) : (
        <Fallback title={fallbackTitle} />
      )}
      <div className="movie__info">
        <div className="movie__info--title">{fallbackTitle}</div>
        <div className="movie__info--vote">{voteAverage}</div>
      </div>
    </div>
  )
}

export default Movie;