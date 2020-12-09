import logo from "./logo.svg";
import "./App.css";

// React/JSX Element
const userNameSpan = <h2> Gal Amouyal </h2>;

const header = "Galamouyal@gmail.com";
// Jsx elements can be placed inisde array
// const arrayOfHeaders = [header, header, header];

function App() {
  const student2 = "Noam";
  const numberOfStudents = 5;
  const student3 = <li> Haim </li>;

  return (
    <div className="App">
      <div>{header}</div>
      <h2>
        Students <span> {numberOfStudents} </span>
      </h2>
      <ul>
        <li> Sapir </li>
        <li> {student2} </li>
        {student3}
      </ul>
    </div>
  );
}

function HeaderComponent() {
  return <h1> This is my first component </h1>;
}

export default App;
