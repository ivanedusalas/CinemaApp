import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css"
import { useState, useEffect } from "react";

export function MoviesGrid(){
  useEffect(() => [
    fetch("/discover/movie" , {
      headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIyZDI5ZjkyNGI0ZmQ2ZTZhMGY5OWRjNmRmMmMxNSIsInN1YiI6IjYzMTc2N2FkNzEwODNhMDA5MjRhNmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtTyQQ9-5VBy9uki_wgU9qRsZhIpTv_g2A4pIB_qok8",
        "Content-Type": "application/json;charset=utf-8" 
      },
    }),
  ]);
    return(
        <ul className={styles.moviesGrid}>
          {movies.map((movie)=>
            <MovieCard key={movie.id} movie={movie} />
          )}
        </ul>
    )
}