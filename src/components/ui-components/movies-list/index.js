import React from "react"
import Movie from "../movie";
import MovieCardClass from "../movie/index-class";



export default function MoviesList(props) {
    const { movies = [], showImage } = props;
    if (!Array.isArray(movies)) return <div> Movies List is not Availble </div>;
    return movies.map((movie) => {
        return <Movie key={movie.imdbID} showImage={showImage} {...movie} />;
    });
}