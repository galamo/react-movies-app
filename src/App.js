import React from "react";
import "./App.css";

import HeaderApp from "./components/ui-components/header-app";
import HeaderAppClass from "./components/ui-components/header-app/index-class";
import ImageApp from "./components/ui-components/image-app";
import MovieCardClass from "./components/ui-components/movie/index-class";

// JSX element
const userEmail = "galamouya88@gmail.com";

function App() {
  const propsToMovieCard = {
    title: "the godfather",
    year: "2020-05-05",
    src:
      "https://nofilmschool.com/sites/default/files/styles/facebook/public/the_godfather_part_iii.png?itok=87AlELaN",
  };

  return (
    <div className="App">
      <div>{userEmail}</div>
      <HeaderApp headerText="Movies List" />
      <div className="container">
        <div className="row">
          <MoviesListClass movies={moviesLocalData.Search} showImage={true} />
        </div>
      </div>

      <HeaderAppClass headerText="Home" />
      <MoviesListLi
        moviesNames={moviesLocalData.Search.map((movie) => movie.Title)}
      />
      <HeaderApp headerText="About" />
      <ImageApp />
      <HeaderApp headerText="Contact us" />
      <ImageApp src="https://i.pinimg.com/236x/83/f9/95/83f995c719319cadcc38ec3eda019a19--creepy-halloween-halloween-costumes.jpg" />
      <HeaderApp />
    </div>
  );
}


class AppClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showImage: true, showOrHideString: "Hide", searchValue: "" }
  }

  toggleImages = () => {
    const isImages = !this.state.showImage
    const showOrHideString = isImages ? "Hide " : "Show "
    this.setState({
      ...this.state, showImage: isImages, showOrHideString
    })
  }

  filterMovies = (movies) => {
    if (!Array.isArray(movies)) return [];
    if (!this.state.searchValue) return movies
    return movies.filter(movie => movie.Title.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()));
  }

  render() {
    console.log(this.state.searchValue)
    const filteredMovies = this.filterMovies(moviesLocalData.Search)
    return (
      <div className="App">
        <div>{userEmail}</div>
        <HeaderApp headerText="Search" />
        <div>
          <div className="container">
            <div className="row">
              <input type={"text"} onChange={(e) => {
                this.setState({
                  ...this.state, searchValue: e.target.value
                })
              }} />

            </div>
          </div>
        </div>
        <HeaderApp headerText="Movies List" />
        <button className={"btn btn-warning"} onClick={this.toggleImages}> {this.state.showOrHideString} Images </button>
        <div className="container">
          <div className="row">
            <MoviesListClass movies={filteredMovies} showImage={this.state.showImage} />
          </div>
        </div>

        <HeaderAppClass headerText="Home" />
        <MoviesListLi
          moviesNames={moviesLocalData.Search.map((movie) => movie.Title)}
        />
        <HeaderApp headerText="About" />
        <ImageApp />
        <HeaderApp headerText="Contact us" />
        <ImageApp src="https://i.pinimg.com/236x/83/f9/95/83f995c719319cadcc38ec3eda019a19--creepy-halloween-halloween-costumes.jpg" />
        <HeaderApp />
      </div>
    );
  }

}



// use className instead class

function MovieCard(props) {
  const { Title, Year, Poster, Type, imdbID } = props;
  return (
    <div className="card col-lg-3">
      <ImageApp src={Poster} />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Year}</p>
        <p className="card-text">{Type}</p>
        <p className="card-text">{imdbID}</p>

        <a
          href={`http://www.omdbapi.com/?apikey=ce8afb69&i=${imdbID}`}
          className="btn btn-primary"
        >
          Go to Movie
        </a>
      </div>
    </div>
  );
}
function MoviesList(props) {
  const { movies = [] } = props;
  if (!Array.isArray(movies)) return <div> Movies List is not Availble </div>;
  return movies.map((movie) => {
    return <MovieCard key={movie.imdbID} {...movie} />;
  });
}


class MoviesListClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies = [] } = this.props;
    if (!Array.isArray(movies)) return <div> Movies List is not Availble </div>;

    return movies.map((movie) => {
      return <MovieCardClass key={movie.imdbID} {...movie} showImage={this.props.showImage} />;
    });
  }
}












function MoviesListLi(props) {
  const { moviesNames = [] } = props;
  return (
    <ul>
      {/* <li> Scream </li>
      <li> Scream2 </li>
      <li> Scream3 </li> */}
      {moviesNames.map((movie, index) => {
        return <li key={movie + index}> {movie} </li>;
      })}
    </ul>
  );
}

var moviesLocalData = {
  Search: [
    {
      Title: "Avatar",
      Year: "2009",
      imdbID: "tt0499549",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    },
    {
      Title: "Avatar: The Last Airbender",
      Year: "2005–2008",
      imdbID: "tt0417299",
      Type: "series",
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
      Poster: "N/A",
    },
    {
      Title: "The King's Avatar: For the Glory",
      Year: "2019",
      imdbID: "tt10736726",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWFlMmNhZGEtYmQwYS00MGEwLWFkYzItYmZlNjI4ZDY3YmZkXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_SX300.jpg",
    },
  ],
  totalResults: "65",
  Response: "True",
};

export default AppClass;
