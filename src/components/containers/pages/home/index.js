import React, { useState, useEffect } from "react"
import MoviesList from "../../../ui-components/movies-list"
import axios from "axios"
import { InputGroup, FormControl } from "react-bootstrap"

const API_URL = "http://www.omdbapi.com/?plot=full&apikey=4f7462e2"

export default function HomePage() {

    const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState(0)
    // useEffect
    // param 1 - function to execute
    // param 2 - dependencies array
    useEffect(() => {
        callApi()
    }, [inputValue])

    async function callApi() {
        const { data } = await axios.get(`${API_URL}&i=${inputValue}`)
        setMovies(data.Search || [data])
    }

    return <div className="container">
        <div className="row">
            <InputGroup className="mt-3 mb-3">
                <FormControl onChange={(e) => { setInputValue(e.target.value) }}
                    placeholder="Search Movie"
                />
            </InputGroup>
        </div>
        <div className="row">
            <MoviesList movies={movies} showImage={true} />
        </div>
    </div>


}