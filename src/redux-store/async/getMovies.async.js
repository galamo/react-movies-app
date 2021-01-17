
import axios from "axios"
import { ACTIONS } from "../actions";
import store from "../index"
export const API_URL = "http://localhost:5000/movies"
const { dispatch } = store;

export async function getMovies(inputValue, searchBy) {
    try {
        if (!inputValue) return;
        //  SET LOADING

        const { data } = await axios.get(`${API_URL}/search?searchBy=${searchBy}&inputValue=${inputValue}`)
        const { results } = data;
        if (results && results.length) {
            dispatch({ type: ACTIONS.MOVIES.GET_FROM_SERVER_DONE, payload: results })
        }
    } catch (ex) {
        // ERROR ACTION
    }
}

