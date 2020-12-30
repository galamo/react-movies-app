import React, { useState } from "react"
import { Form, Button, Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"

export default function AddMovie(props) {
    const [movieName, setMovieName] = useState(null)
    const [movieImage, setMovieImage] = useState(null)
    const [movieYear, setMovieYear] = useState(new Date().toISOString().split("T")[0])
    const dispatch = useDispatch();
    const saveMovie = () => {
        dispatch({ type: "ADD_MOVIE", payload: { Title: movieName, Poster: movieImage, Year: movieYear } })
        // const { addMovie } = props;
        // if (typeof addMovie !== 'function') return
        // addMovie({ Title: movieName, Poster: movieImage, Year: movieYear })
    }

    return (<Form style={{ border: "2px red solid" }}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="movieName" onChange={(e) => setMovieName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Image URL" onChange={(e) => setMovieImage(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Year</Form.Label>
            <Form.Control type="date" placeholder="Year" value={movieYear} onChange={(e) => {
                setMovieYear(e.target.value)
            }} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
        </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        <Button onClick={saveMovie} variant="primary" type="button">
            Save Movie
    </Button>
    </Form>)

}