import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Mycomponent from './Mycomponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Mycomponent />
    <App/>
    </>
  </React.StrictMode>
);
