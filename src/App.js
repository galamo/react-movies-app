import logo from "./logo.svg";
import "./App.css";

// React/JSX Element
const userNameSpan = <h2> Gal Amouyal </h2>;

const header = "Galamouyal@gmail.com";

function App() {
  return <div className="App">{header}</div>;
}

function HeaderComponent() {
  return <h1> This is my first component </h1>;
}

export default App;
