import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/style.scss'


const app = document.getElementById( 'appId' );
ReactDOM.render( <IndecisionApp options={ ['Neha', 'Smita'] }/>, app );
