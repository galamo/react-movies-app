
import axios from "axios"
import { ACTIONS } from "../actions";
import store from "../index"
export const API_URL = "http://www.omdbapi.com/?plot=full&apikey=4f7462e2"
const { dispatch } = store;

export async function getMovies(inputValue, searchBy) {
    try {
        if (!inputValue) return;
        //  SET LOADING

        const { data } = await axios.get(`${API_URL}&${searchBy}=${inputValue}`)
        const { Response, Error: errorMessage } = data;
        if (Response === "False") {
            // ERROR ACTION
        } else {
            console.log("movies arrived")
            const dataFromServer = data.Search || [data];
            dispatch({ type: ACTIONS.MOVIES.GET_FROM_SERVER_DONE, payload: dataFromServer })
        }
    } catch (ex) {
        // ERROR ACTION
    }
}

