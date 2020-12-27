import React from "react"
import { useParams } from "react-router-dom"

export default function MoviePage() {
    const params = useParams()
    console.log(params)
    return <div> Movie Page: {params.movieTitle} </div>
}