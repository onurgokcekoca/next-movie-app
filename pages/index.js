import React, { useState } from "react";

import axios from "axios";
import Header from "../components/Header";
import Movies from "../components/Movies";

export default function Home({ movies }) {
  console.log(movies);

  return (
    <div>
      <Header />
      <div>
        <Movies movies={movies} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = await res.data.results;

  return {
    props: { movies },
  };
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
