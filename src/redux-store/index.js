import { createStore } from "redux"

import { ACTIONS } from "./actions"

const initialState = {
    movies: [],
    moviesFromServer: [],
    numberOfMovies: 0,
    favorites: []
}
const store = createStore(mainReducer)

// another file dispath({ type:ACTIONS.MOVIES.ADD_MOVIE })

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.MOVIES.ADD_MOVIE: {
            const newMovie = action.payload;
            return { ...state, movies: [...state.movies, newMovie], numberOfMovies: state.numberOfMovies + 1 };
        }

        case ACTIONS.MOVIES.ADD_TO_FAVORITES: {
            const { movie } = action.payload
            const favorites = [...state.favorites, movie]
            console.log(favorites)
            return { ...state, favorites };
        }

        case ACTIONS.MOVIES.GET_FROM_SERVER_DONE: {
            const movies = [...state.favorites, ...action.payload]

            return { ...state, moviesFromServer: movies };
        }

        default: {
            return state;
        }
    }
}

export default store;