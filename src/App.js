import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="happiness" />
        </main>

        <footer className="App-footer">
          This app was coded by Jalayana Miller and is open-sourced on{" "}
          <a href="https://github.com/Jalayana/dictionary-project">GitHub</a>{" "}
          and hosted on{" "}
          <a href="https://flourishing-shortbread-9d1780.netlify.app/">
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
