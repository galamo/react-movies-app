import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import { Button } from "react-bootstrap"
import MovieCardClass from "./components/ui-components/movie/index-class";
import AddMovie from "./components/ui-components/add-movie";
import HomePage from "./components/containers/pages/home";
import NavBarApp from "./components/ui-components/nav-bar";
import AboutPage from "./components/containers/pages/about";

import { routes } from "./components/ui-components/nav-bar/index"
import MoviePage from "./components/containers/pages/movie-page";
import CountryPage from "./components/containers/pages/country-page";
import { useSelector } from "react-redux";
import FavoritesPage from "./components/containers/pages/favorites-page";
import Home2 from "./components/containers/pages/home2";
import { getMovies } from "./redux-store/async/getMovies.async";


export default function App() {

  return (<Router>
    <div className="container">
      <h1 className="jumbotron"> Movies App  </h1>
      <div className="row">
        <NavBarApp />
      </div>
      <div className="row">
        <Switch>
          <Route key="add-movie" path="/add-movie">
            <div>
              <AddMovie />
              <ShowCreatedMovies />
            </div>
          </Route>
          <Route key="about" path="/about-page">
            <AboutPage />
          </Route>
          <Route key="movie-page" path="/movie-page/:id">
            <MoviePage />
          </Route>
          <Route key="country-page" path="/country-page/:country">
            <CountryPage />
          </Route>
          <Route key="favorites-page" path="/favorites-page">
            <FavoritesPage />
          </Route>
          <Route key="home2" path="/home2">
            <Home2 />
          </Route>
          <Route key="home" path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>)
}

function ShowCreatedMovies() {
  const globalState = useSelector(state => state)
  console.log(globalState)
  console.log("selector")
  const { movies, numberOfMovies } = globalState;
  return <div style={{ border: "2px red solid" }} className="mt-5">
    <h1> show movies: {numberOfMovies} </h1>
    {movies.map(m => <h2 key={m.Title}> {m.Title} </h2>)}
  </div>
}






var moviesLocalData = {
  Search: [
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Rank: 5,
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender",
      Year: "2005–2008",
      imdbID: "tt0417299",
      Type: "series",
      Rank: 4,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - The Legend of Aang",
      Year: "2006",
      imdbID: "tt0959552",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjUwNzA5Nzc4N15BMl5BanBnXkFtZTgwNjM1ODY4MDE@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2017–",
      imdbID: "tt6859260",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjIyMjE5ZDYtMTQxNC00NTEzLTgwYzYtMmM0NDg3OWFlYWM5XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Game",
      Year: "2009",
      imdbID: "tt1517155",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYxODI2OTI4MF5BMl5BanBnXkFtZTcwNjI1NzMwMw@@._V1_SX300.jpg",
    },
    {
      Title: "The King's Avatar",
      Year: "2019",
      imdbID: "tt10732794",
      Type: "series",
      Rank: 2,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMxZDc1N2ItODI3NS00MDIwLWJkYzAtMTgyMDZlN2FlNGYzXkEyXkFqcGdeQXVyMjQ0OTYxOTc@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender - Into the Inferno",
      Year: "2008",
      imdbID: "tt1459460",
      Type: "game",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWFjYWUwZTMtNjM2Mi00YjU3LWI2NjQtZTNhOTRhM2Q3YmJkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: Creating the World of Pandora",
      Year: "2010",
      imdbID: "tt1599280",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Guild: Do You Wanna Date My Avatar",
      Year: "2009",
      imdbID: "tt3051150",
      Type: "movie",
      Rank: 3,
      Poster: "N/A",
    },
    {
      Title: "The King's Avatar: For the Glory",
      Year: "2019",
      imdbID: "tt10736726",
      Type: "movie",
      Rank: 1,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWFlMmNhZGEtYmQwYS00MGEwLWFkYzItYmZlNjI4ZDY3YmZkXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_SX300.jpg",
    },
  ],
  totalResults: "65",
  Response: "True",
};

