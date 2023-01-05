import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './counter/counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Counter/>
  </React.StrictMode>
)
