import "./App.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Fade >
          <About />
        </Fade>
      </header>
    </div>
  );
}

export default App;
