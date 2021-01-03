import React, { useState, useEffect } from "react"
import MoviesList from "../../../ui-components/movies-list"
import axios from "axios"
import { InputGroup, FormControl, Form, Alert } from "react-bootstrap"
import WithLoading from "../../hoc/isLoading"
import { useDispatch, useSelector } from "react-redux"
import { ACTIONS } from "../../../../redux-store/actions"
import { getMovies } from "../../../../redux-store/async/getMovies.async"

export const API_URL = "http://www.omdbapi.com/?plot=full&apikey=4f7462e2"

const params = [{ key: "search", value: "s", innerText: "Search", default: true },
{ key: "id", value: "i", innerText: "Id" }, { key: "title", value: "t", innerText: "Title" }]

export default function HomePage() {
    const defaultItem = params.find(item => item.default)
    const [movies, setMovies] = useState([])
    const [inputValue, setInputValue] = useState(null)
    const [searchBy, setSearchBy] = useState(defaultItem.value)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const moviesFromServer = useSelector(state => state.moviesFromServer)
    const dispatch = useDispatch()

    // useEffect
    // param 1 - function to execute
    // param 2 - dependencies array
    useEffect(() => {
        callApi()
    }, [inputValue, searchBy])

    async function callApi() {
        if (!inputValue) return;
        getMovies(inputValue, searchBy)
    }

    const MoviesListWithLoading = WithLoading(MoviesList)
    return <div className="container">

        {_getAlert(errorMessage)}
        <div className="row mt-3 mb-3">
            <div className="col-lg-9 p-0">
                <InputGroup >
                    <FormControl onChange={(e) => { setInputValue(e.target.value) }}
                        placeholder="Search Movie"
                    />
                </InputGroup>
            </div>
            <div className="col-lg-3 p-0">
                <Form.Control as="select" onChange={(e) => { setSearchBy(e.target.value) }} custom>
                    <GetOptions options={params} defaultItem={defaultItem} />
                </Form.Control>
            </div>
        </div>
        <div className="row">
            <MoviesListWithLoading isLoading={isLoading} movies={moviesFromServer} showImage={true} />
        </div>
    </div>

    function _getAlert(message) {
        return (<div className="row">
            <Alert show={message} style={{ textAlign: "center", position: "absolute", left: "0px", top: "0px", width: "100%" }} key={123456789} variant={"danger"}>
                {message}
            </Alert>
        </div>)
    }
}

function GetOptions(props) {
    const { options, defaultItem } = props;
    if (!Array.isArray(options)) return []
    return params.map((optionItem) => {
        const isSelected = optionItem.value === defaultItem.value ? "selected" : null
        return <option selected={isSelected} key={optionItem.key} value={optionItem.value}>{optionItem.innerText} </option>
    })
}