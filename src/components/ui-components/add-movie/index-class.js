import React, { useState } from "react"
import { Form, Button, Dropdown } from "react-bootstrap"


export default class AddMovie extends React.Component {

    constructor(props) {
        super(props)
        const defaultYear = new Date().toISOString().split("T")[0];
        this.state = { movieName: null, movieImage: null, movieYear: defaultYear }
    }

    // setMovieName = (v) => { this.setState({ ...this.state, movieName: v }) }
    // setMovieImage = (v) => { this.setState({ ...this.state, movieImage: v }) }
    // setMovieYear = (v) => { this.setState({ ...this.state, movieYear: v }) }

    onChangeInput = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    saveMovie = () => {
        const { addMovie } = this.props;
        const { movieName, movieImage, movieYear } = this.state;
        if (typeof addMovie !== 'function') return
        addMovie({ Title: movieName, Poster: movieImage, Year: movieYear })
    }
    render() {
        return (<Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control type="text" placeholder="movieName" name="movieName" onChange={this.onChangeInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image URL" name="movieImage" onChange={this.onChangeInput} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="date" placeholder="Year" name="movieYear" value={this.state.movieYear} onChange={this.onChangeInput} />
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

            <Button onClick={this.saveMovie} variant="primary" type="button">
                Save Movie
            </Button>
        </Form >)
    }


}