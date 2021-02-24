import './App.css';
import "materialize-css/dist/js/materialize"
import "materialize-css/dist/css/materialize.css"
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import logo from "../../assets/logo.png"
import Home from "../Home";
import Courses from "../Courses";
import Gallery from "../Gallery";
import Certificate from "../Certificate";
import About from "../About";
import NotFound from "../NotFound";
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
          <nav className="white" role="navigation">
              <div className="nav-wrapper container">
                  <a id="logo-container" href="#" className="brand-logo">
                      <img src={logo} style={{"height": "63px"}} alt="logo" />
                  </a>
                  <ul className="right hide-on-med-and-down">
                      {routes.map((l, index)=>(
                          <li key={index.toString()}><Link className="grey-text text-darken-3" to={l.link}>{l.name}</Link></li>
                      ))}
                  </ul>
                  <ul id="nav-mobile" className="sidenav">
                      {routes.map((l, index)=>(
                          <li key={index}><Link to={l.link}>{l.name}</Link></li>
                      ))}
                  </ul>
                  <a href="#" data-target="nav-mobile" className="red-text sidenav-trigger"><i className="material-icons">menu</i></a>
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
                          © 2021 <span className="yellow-text text-lighten-3">BICS</span>
                      </p>
                  </div>
              </div>
          </footer>
      </Router>
  );
}

export default App;
