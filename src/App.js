import logo from "./logo.svg";
import "./App.css";

// JSX element
const userEmail = "galamouya88@gmail.com";

function App() {
  return (
    <div className="App">
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
  return <img src={srcParam} height={300} width={300} />;
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

export default App;
