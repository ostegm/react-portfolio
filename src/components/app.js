import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Navbar,  NavbarBrand, Nav, NavItem } from 'reactstrap';
import Home from './home';
import ProjectList from './project-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const scrollOptions = {
  offset: 0,
  align: 'top',
  duration: 300,
  ease:'inCirc'
}

const handleNavClick = (e, section) => {
  e.preventDefault();
  scrollToComponent(section, scrollOptions);
}


export default class App extends React.Component {
  componentDidMount() {
    scrollToComponent(this.Home, scrollOptions);
  }

  render() {
    return (
      <div className="app">
      <Navbar color="dark" light expand="md" className="fixed-top">
        <NavbarBrand>
          <a href="/" onClick={e => handleNavClick(e, this.Home)}>Otto Stegmaier</a>
        </NavbarBrand>
        <Nav className="ml-auto .sticky-top" navbar>
          <NavItem>
            <a href="https://github.com/ostegm" target="_blank" rel="noopener noreferrer">Github</a>
          </NavItem>
          <NavItem>
            <a href="/" onClick={e => handleNavClick(e, this.Projects)}>Projects</a>
          </NavItem>
          </Nav>
      </Navbar>
        <main>
          <Home ref={(s) => { this.Home = s; }}/>
          <ProjectList ref={(s) => { this.Projects = s; }} />
        </main>
      </div>
    );
  };
}
