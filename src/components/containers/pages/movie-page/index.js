import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../home/index"
import WithLoading from "../../hoc/isLoading"
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../../../redux-store/actions"
import { getMovieDetails } from "../../../../redux-store/async/getMovieDetails.async"


export default function MoviePage() {
    const params = useParams()
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { currentMovie, isCurrentMovieLoading } = useSelector((state) => { return state })

    useEffect(() => {
        getMovieDetails(params.id)
    }, [])



    const MovieWithLoading = WithLoading(MovieComponent)
    return <div> Movie Page: {params.id}

        <MovieWithLoading isLoading={isCurrentMovieLoading} movie={currentMovie} />
    </div>
}

function MovieComponent(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    if (!props.movie) return null;
    const { Poster, Country } = props.movie
    return <div>
        <h2><Link to={`/country-page/${Country}`} > {Country}</Link>  </h2>
        {/* <h2 onClick={() => { history.push(`/country-page/${Country}`) }}> {Country}  </h2> */}

        <img src={Poster} width={400} height={400} />
        <button onClick={() => { dispatch({ type: ACTIONS.MOVIES.ADD_TO_FAVORITES, payload: props }) }}
            className="btn btn-primary"> Add To Favorites  </button>
    </div>
}