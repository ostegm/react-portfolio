import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Project from './project';
import './project-list.css';


export function ProjectList(props) {
  const projects = props.projects.map(p => {
    return <Project 
              img={p.img} 
              title={p.title}
              demoUrl={p.demoUrl}
              githubUrl={p.githubUrl}
              description={p.description}
            /> 
  })
  return (
    <Container className="projects">
      <h2>Projects</h2>
      <hr></hr>
      {projects}
    </Container>
  );
};

const mapStateToProps = (state, props) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(ProjectList);
