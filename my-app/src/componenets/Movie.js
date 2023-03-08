import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres}) {
    return (
    <div>
          <img src={coverImg} alt={title} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
    )
}

Movie.propTypes= {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // genres는 array의 배열 기능을 이용했기 때문에 형식이 다르다. 
};

export default Movie;