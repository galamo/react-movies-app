
import axios from "axios"
import { ACTIONS } from "../actions";
import store from "../index"
import { API_URL } from "./getMovies.async";
const { dispatch } = store;



export async function getMovieDetails(id) {

    try {
        const { data } = await axios.get(`${API_URL}&i=${id}`)
        dispatch({ type: ACTIONS.MOVIES.GET_MOVIE_DETAILS_DONE, payload: data })
    } catch (ex) {

        console.log("we had an error", ex)
    } finally {
        dispatch({ type: ACTIONS.MOVIES.IS_CURRENT_MOVIE_LOADING, isCurrentMovieLoading: false })
    }
}

