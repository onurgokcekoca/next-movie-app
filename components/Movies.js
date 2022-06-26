import MovieCard from "./MovieCard";
import Link from "next/link";

function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
            <a>
              <MovieCard key={movie.id} movie={movie} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
