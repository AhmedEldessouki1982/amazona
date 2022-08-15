import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Storeprovider from './components/Store/Storeprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Storeprovider> 
        <App /> 
      </Storeprovider>
    </BrowserRouter>
);