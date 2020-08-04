import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const pageContent = {
  position: "relative",
  minHeight: "100vh",
};

const mainContent = {
  paddingBottom: "60px",
};

const footer = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
};

function App() {
  return (
    <div style={pageContent}>
      <Router>
        <div style={mainContent}>
          <Header />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      <div style={footer}>
      <Footer />
      </div>
    </div>
  );
}

export default App;
