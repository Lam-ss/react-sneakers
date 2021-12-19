import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; 
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

// https://www.figma.com/file/Nq1N1JTscoFKwfRCLw3wlo/React-Sneakers-(Copy)?node-id=0%3A1

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

