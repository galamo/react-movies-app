import React, { useState, useEffect } from "react"
import MoviesList from "../../../ui-components/movies-list"
import axios from "axios"


export default function HomePage() {

    const [movies, setMovies] = useState([])
    const [counter, setCounter] = useState(0)
    // useEffect
    // param 1 - function to execute
    // param 2 - dependencies array
    useEffect(() => {
        callApi()
    }, [counter])

    async function callApi() {
        const { data } = await axios.get("http://www.omdbapi.com/?s=batman&plot=full&apikey=4f7462e2")
        setMovies(data.Search)
    }

    return <div className="container">
        <button onClick={() => { setCounter(counter + 1) }}>  run useEffect  </button>
        <input type="text" onChange={() => { setCounter(counter + 1) }} />
        <div className="row">
            <MoviesList movies={movies} />
        </div>
    </div>


}