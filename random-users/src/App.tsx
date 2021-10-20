import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import AboutMe from './components/AboutMe/AboutMe';
import UserGenerator from './components/UserGenerator/UserGenerator';


const App : React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/generator" className="navbar-brand">
          Gabriel Arruda
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/generator"} className="nav-link">
              User Generator
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/aboutme"} className="nav-link">
              About Me
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/generator"]} component={UserGenerator} />
          <Route exact path="/aboutme" component={AboutMe} />          
        </Switch>
      </div>

    </div>
  );
}

export default App;
