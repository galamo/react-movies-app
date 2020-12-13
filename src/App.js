import logo from "./logo.svg";
import "./App.css";

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
      <div className="container">
        <div className="row">
          <MovieCard
            title={propsToMovieCard.title}
            year={propsToMovieCard.year}
            src={propsToMovieCard.src}
          />
          <MovieCard {...propsToMovieCard} />
          <MovieCard title={"scream"} src="" year="2020-01-01" />
          <MovieCard title={"scream"} src="" year="2020-01-01" />
          <MovieCard title={"scream"} src="" year="2020-01-01" />
        </div>
      </div>
      <div>{userEmail}</div>
      <HeaderApp headerText="Home" />
      <MoviesList moviesNames={["Scream 1", "Scream 2", "Scream 3"]} />
      <HeaderApp headerText="About" />
      <ImageApp />
      <HeaderApp headerText="Contact us" />
      <ImageApp src="https://i.pinimg.com/236x/83/f9/95/83f995c719319cadcc38ec3eda019a19--creepy-halloween-halloween-costumes.jpg" />

      <HeaderApp />
    </div>
  );
}

// use className instead class

const num = 2;

function MovieCard(props) {
  const { title, year, src } = props;
  return (
    <div className="card col-lg-3">
      <ImageApp src={src} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>
        <a href="#" class="btn btn-primary">
          Go to Movie
        </a>
      </div>
    </div>
  );
}

function HeaderApp(props) {
  const classNameFromCss = "uglyHeader";
  // if (!props.headerText) return null;
  const defaultText = "MISSING_HEADER_TEXT";
  return (
    <h2 style={{ color: props.color }} className={classNameFromCss}>
      {props.headerText || defaultText}
    </h2>
  );
}

function ImageApp(props) {
  // const { src } = props;
  const src = props.src;
  const defaultSrcImage =
    "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg";
  const srcParam = src || defaultSrcImage;
  return (
    <img className="card-img-top" src={srcParam} height={300} width={300} />
  );
}

function MoviesList(props) {
  const { moviesNames = [] } = props;
  return (
    <ul>
      {/* <li> Scream </li>
      <li> Scream2 </li>
      <li> Scream3 </li> */}
      {moviesNames.map((movie) => {
        return <li> {movie} </li>;
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

export default App;
