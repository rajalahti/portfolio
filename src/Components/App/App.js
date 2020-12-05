import "./App.css";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
