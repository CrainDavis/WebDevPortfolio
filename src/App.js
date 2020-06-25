import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Welcome}/>
            <Route exact path="/aboutme" component={AboutMe}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
