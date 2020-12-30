import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../home/index"
import WithLoading from "../../hoc/isLoading"


export default function MoviePage() {
    const params = useParams()
    const [movieImage, setMovieImage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMovieDetails(params.id)
    }, [])

    async function getMovieDetails(id) {

        try {
            const { data } = await axios.get(`${API_URL}&i=${id}`)
            setMovieImage(data.Poster)
        } catch (ex) {
            // print some error to the UI
            console.log("we had an error", ex)
        } finally {
            setIsLoading(false)
        }
    }

    const MovieWithLoading = WithLoading(MoviePageTest)
    return <div> Movie Page: {params.id}
        <MovieWithLoading isLoading={isLoading} image={movieImage} />
    </div>
}

function MoviePageTest(props) {
    const { image } = props
    return <div>
        <img src={image} width={400} height={400} />
    </div>
}