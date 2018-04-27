import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import compareVision from './components/img/compareVision.png';
import quizApp from './components/img/quizApp.png';
import dabbl from './components/img/dabbl.png';

export const initialState = {
  projects: [
    {
      title: 'Hacker News Sentiment Tracker',
      description: "I love reading Hacker News and always read the comments to see how people respond to a story, so I decided to automate it! The node server handles the sentiment scoring by working with the hacker news API and Google's cloud natural language service, and the React client displays the results.",
      demoUrl: 'https://www.dabbl.io/',
      githubUrl: 'https://github.com/ostegm/hn-sentiment-client',
      img: dabbl,
    },
    {
      title: 'Computer Vision API Comparison',
      description: 'I do a lot of work with machine learning, and when I heard that a few companies were offering "Object detection as a service" I wanted to see how they compared, so I built this site. It passes an image through two classification services (Clarifai and Google) and displays the top results side by side.',
      demoUrl: 'https://compare-vision-apis.appspot.com/',
      githubUrl: 'https://www.github/com',
      img: compareVision,
    },
    {
      title: 'History Quiz App',
      description: 'This was the first website I built from scratch - a quiz app built using just HTML and CSS. Its fun to watch people try to get all the questions right! See how you fare.',
      demoUrl: 'https://ostegm.github.io/history-quiz/',
      githubUrl: 'https://github.com/ostegm/history-quiz',
      img: quizApp,
    },  
  ],
};

const store = createStore(() => (initialState))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
