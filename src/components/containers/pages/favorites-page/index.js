import React, { useEffect, useState } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../home/index"
import WithLoading from "../../hoc/isLoading"
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../../../redux-store/actions"
import MoviesList from "../../../ui-components/movies-list"


export default function FavoritesPage() {
    const favorites = useSelector(state => state.favorites)
    return <div className="container">
        <h1> Favorites </h1>
        <div className="row">
            <MoviesList movies={favorites} showImage={true} />
        </div>
    </div>
}

