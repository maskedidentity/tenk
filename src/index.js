// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the main App component
import App from './App';

// Import the global CSS (optional)
import './index.css';

// Render the App component into the 'root' div in the HTML file
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
