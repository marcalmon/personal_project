import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyA9FvmtlAFl7DOTI78HOygtPs1tMoNNZgk",
    authDomain: "personalproject-b4eb9.firebaseapp.com",
    databaseURL: "https://personalproject-b4eb9.firebaseio.com",
    projectId: "personalproject-b4eb9",
    storageBucket: "personalproject-b4eb9.appspot.com",
    messagingSenderId: "926916457440"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
