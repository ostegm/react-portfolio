import React from 'react';
import './project.css';
import { 
  Card, CardImg, CardText, CardBody, CardTitle, CardLink, Row, Col } from 'reactstrap';

export default function Project(props) {
 return (
    <Row className="project">
      <Col sm="6">
      <Card>
          <CardImg top width="100%" src={props.img} alt="Screenshot from project." />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.description}</CardText>
            <CardLink href={props.demoUrl} target="_blank">View Live Demo</CardLink>
            <CardLink href={props.githubUrl} target="_blank">View On Github</CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};


Project.defaultProps = {
  title: 'Some Project',
  description: 'I made this cuz I can!',
  demoUrl: 'https://www.google.com',
  githubUrl: 'https://www.github/com',
  img: null,
};