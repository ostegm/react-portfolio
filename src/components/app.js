import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import NavBar from './nav-bar';
import About from './about';
import Project from './Project';
import Notfound from './not-found';
import './app.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Project} />
            <Route path="*" component={Notfound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
