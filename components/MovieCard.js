import Image from "next/image";

function MovieCard({ movie }) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={250}
        height={300}
        alt={`${movie.title}`}
      />
      <div className="explanation">
        <div>{movie.title}</div>
        <div>
          <span className="imdb">{movie.vote_average}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
