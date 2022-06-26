import Image from "next/image";
import axios from "axios";
import Meta from "../../../components/Meta";

function Movie({ movie }) {
  console.log(movie);
  const { title, tagline, genres, overview } = movie;
  return (
    <div>
      <div className="contents">
        <Meta title={`${movie.title}`} />
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={650}
          height={800}
          alt={`${movie.title}`}
        />
        <div className="texts">
          <div>
            <h2>{title}</h2>
            <h4>{tagline}</h4>
          </div>
          <div className="genres">
            {genres.map((genre) => (
              <div className="genre" key={genre.id}>
                <div>{genre.name}</div>
              </div>
            ))}
          </div>
          <div className="overview">{overview}</div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(data) {
  const { id } = data.params;
  const res = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movie = await res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movies = await res.data.results;
  const id = movies.map((movie) => movie.id);
  const paths = id.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default Movie;
