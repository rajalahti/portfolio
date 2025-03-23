import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Modern app styling with inline CSS
  const styles = {
    app: {
      minHeight: "100vh",
      backgroundColor: "#1a1a2e", // Dark blue background
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      transition: "all 0.3s ease"
    },
    appHeader: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px"
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.appHeader}>
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
