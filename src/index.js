//import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import Main from './Components/Main';



ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>, 
  document.getElementById('root'));
