import React from 'react';
import { Container } from 'reactstrap';
import './home.css';

export default function Home() {
  return (
    <Container className="home">
      <h2>Hi! I'm Otto</h2>
      <hr></hr>
      <h5>Be grateful for and nuture your curiousity.</h5>
      <span>
      I'm a data scientist living in San Francisco learning to do full
      stack web development. In my day job I use machine learning to help
      improve how teams operate. In a previous live I served as a Infantry
      Officer in the Marines. Outside of work I love to surf, ski, kitesurf
      and learn new skills. Check out some of my projects below.
      </span>
    </Container>
  );
}
