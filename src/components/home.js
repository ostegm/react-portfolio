import React from 'react';
import { connect } from 'react-redux';
import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h1>Hi! I'm Otto, this is my portfolio.</h1>
    </div>
  );
}


export default connect()(Home);
