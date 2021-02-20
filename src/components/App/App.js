import './App.css';
import "materialize-css/dist/js/materialize"
import "materialize-css/dist/css/materialize.css"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import React, {useEffect} from "react";
import logo from "../../logo.png"
import Home from "../Home";
import Courses from "../Courses";
import Gallery from "../Gallery";
import Certificate from "../Certificate";
import About from "../About";
import NotFound from "../NotFound";
import {Col, Row} from "react-materialize";
import Materialize from "materialize-css"

function App() {

    const routes = [{link: "/", name: "Home", component: Home},
        {link: "/courses", name: "Courses", component: Courses},
        {link: "/gallery", name: "Gallery", component: Gallery},
        {link: "/certificate", name: "Certificate Verification", component: Certificate},
        {link: "/about", name: "About Us", component: About},

    ]
  return (
      <Router>
          <Row>
            <Col l={2} m={12} s={12} className="center">
                <img style={{"width": "140px", "height": "140px"}} src={logo} alt="logo"/>
            </Col>
              <Col l={10} m={12} s={12} className="">
                  <h4 style={{"marginTop": "10px", "fontWeight": "900"}}
                      className="red-text text-darken-4 center">
                      Bharat Institute Of Computer Science
                  </h4>
                  <h6 className="center">A unit of Mercy Foundation Regd. No 05398</h6>
                  <h6 className="center"><small>Govt of Uttar Pradesh</small></h6>
                  <h6 className="center">An ISO certified institute</h6>
              </Col>
          </Row>
          <nav className="red darken-3 accent-4" role="navigation">
              <div className="nav-wrapper right" style={{"width": "90% !important"}}>
                  <ul className="left hide-on-med-and-down">
                      {routes.map((l, index)=>(
                          <li key={index.toString()}><Link to={l.link}>{l.name}</Link></li>
                      ))}
                  </ul>
                  <ul id="nav-mobile" className="sidenav">
                      {routes.map((l, index)=>(
                          <li key={index}><Link to={l.link}>{l.name}</Link></li>
                      ))}
                  </ul>
                  <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
          </nav>
          <Switch>
              {routes.map((r)=>(
                  <Route path={r.link} exact component={r.component}/>
              ))}
              <Route component={NotFound}/>
          </Switch>
          <footer className="page-footer red darken-3 accent-4">
              <div className="footer-copyright">
                  <div className="container">
                      <p>
                          <span className="yellow-text text-lighten-3">BICS</span> <i className="material-icons">copyright</i>
                      </p>
                  </div>
              </div>
          </footer>
      </Router>
  );
}

export default App;
