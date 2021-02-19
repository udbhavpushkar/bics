import './App.css';
import "materialize-css/dist/css/materialize.css"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import React from "react";
import logo from "../../logo.png"
import Home from "../Home";
import Courses from "../Courses";
import Gallery from "../Gallery";
import Certificate from "../Certificate";
import About from "../About";
import NotFound from "../NotFound";
import {Col, Row} from "react-materialize";

function App() {
  return (
      <Router>
          <Row>
            <Col l={2} m={12} s={12}>
                <img style={{"width": "140px", "height": "140px"}} src={logo} alt="logo"/>
            </Col>
              <Col l={10} m={12} s={12} className="hide-on-small-only">
                  <h4 style={{"margin-top": "10px", "font-weight": "900"}}
                      className="red-text text-darken-4 center">
                      Bharat Institute Of Computer Science
                  </h4>
              </Col>
          </Row>
          <Link to="/gallery">Gallery</Link>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/courses" component={Courses}/>
              <Route path="/about" component={About}/>
              <Route path="/verify-certificate" component={Certificate}/>
              <Route path="/gallery" component={Gallery}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
