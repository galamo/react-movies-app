import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../home/index"
import WithLoading from "../../hoc/isLoading"


export default function MoviePage() {
    const params = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMovieDetails(params.id)
    }, [])

    async function getMovieDetails(id) {

        try {
            const { data } = await axios.get(`${API_URL}&i=${id}`)
            setMovie(data)
        } catch (ex) {
            // print some error to the UI
            console.log("we had an error", ex)
        } finally {
            setIsLoading(false)
        }
    }

    const MovieWithLoading = WithLoading(MovieComponent)
    return <div> Movie Page: {params.id}
        <MovieWithLoading isLoading={isLoading} movie={movie} />
    </div>
}

function MovieComponent(props) {
    const history = useHistory()
    if (!props.movie) return null;
    const { Poster, Country } = props.movie
    return <div>
        <h2><Link to={`/country-page/${Country}`} > {Country}</Link>  </h2>
        {/* <h2 onClick={() => { history.push(`/country-page/${Country}`) }}> {Country}  </h2> */}

        <img src={Poster} width={400} height={400} />
    </div>
}