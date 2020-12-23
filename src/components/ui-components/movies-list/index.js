import React from "react"
import MovieCardClass from "../movie/index-class";



export default function MoviesList(props) {
    const { movies = [] } = props;
    if (!Array.isArray(movies)) return <div> Movies List is not Availble </div>;
    return movies.map((movie) => {
        return <MovieCardClass key={movie.imdbID} {...movie} />;
    });
}