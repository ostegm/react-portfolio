import React from 'react';
import { connect } from 'react-redux';
import './home.css';

export function Home() {
  return (
    <div className="home-page">
      <h1>Hi! you're on the home page!</h1>
    </div>
  );
}


export default connect()(Home);
