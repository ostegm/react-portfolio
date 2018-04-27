import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import './project.css';


export class Project extends React.Component {
    
  render() {
   return (
      <Container>
        <h2>Hi you're on a project page for project: {this.props.projectId}</h2>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  projectId: props.match.params.threadId,
});

export default withRouter(connect(mapStateToProps)(Project));
