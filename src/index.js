import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import SAMPLE_PETS from './data/pets.json'; 

ReactDOM.render(<App pets={SAMPLE_PETS} />, document.getElementById('root'));