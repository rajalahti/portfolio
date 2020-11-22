import "./App.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Fade from "react-reveal/Fade";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/skills">
              <Fade>
                <Skills />
              </Fade>
            </Route>
            <Route path="/projects">
              <Fade>
                <Projects />
              </Fade>
            </Route>
            <Route path="/">
              <Fade>
                <About />
              </Fade>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
