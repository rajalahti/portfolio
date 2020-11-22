import "./App.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Fade from 'react-reveal/Fade';
import Skills from '../Skills/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Fade >
          <About />
          <Skills />
        </Fade>
      </header>
    </div>
  );
}

export default App;
