import React from "react";
import Data from './components/NASAPhoto/Data';
import Navbar from "./components/pageNav/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Data />
        <Navbar />
      </div>
      <footer><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></footer>
    </div>
  );
}

export default App;
