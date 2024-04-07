import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <footer className="app-footer">
        <small>
          {" "}
          This page was coded by Nadira-Begim and hosted{" "}
          <a href="https://magenta-chaja-afc907.netlify.app"> on Netlify</a>
        </small>
      </footer>
    </div>
  );
}
