import { createStore } from "redux"

const initialState = {
    movies: [],
    numberOfMovies: 0
}
const store = createStore(mainReducer)

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE": {
            const newMovie = action.payload;
            return { ...state, movies: [...state.movies, newMovie], numberOfMovies: state.numberOfMovies + 1 };
        }

        default: {
            return state;
        }
    }
}

export default store;