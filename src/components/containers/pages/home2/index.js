import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import MoviesList from "../../../ui-components/movies-list"


export default function Home2() {
    const movies = useSelector(state => state.moviesFromServer)
    return <div className="container">
        <h1> Home2 </h1>
        <div className="row">
            <MoviesList movies={movies} showImage={true} />
        </div>
    </div>
}

