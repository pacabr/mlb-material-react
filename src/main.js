
import React from 'react';
import ReactDOM from 'react-dom';
import Styles from '/Users/pacabr/Documents/dev/react-material-mlb/src/styles/styles.scss';
// import HelloForm from './HelloForm';
import { HomePage } from 'components';
import { Title } from 'components';

console.log('hp', HomePage);
console.log('title', Title);


ReactDOM.render((<HomePage />), document.getElementById('main'));