import React from 'react';
import ReactDOM from 'react-dom';
import { getPlayer, getBootstrap } from './requests/requests';


const firebase = require("firebase/app");
require("firebase/database");

const config = {
    apiKey: "AIzaSyCGtMBnVoT2TLEyi1bMeMUl6ja6CXlWSbI",
    authDomain: "fantasy-analytic.firebaseapp.com",
    databaseURL: "https://fantasy-analytic.firebaseio.com",
    projectId: "fantasy-analytic",
    storageBucket: "fantasy-analytic.appspot.com",
    messagingSenderId: "585951624811"
  };
  firebase.initializeApp(config);


  const buttonStyle = {
    background: 'lightcoral',
    padding: '15px',
    margin: '5px',
    boxShadow: 'none',
    border: 'none',
    fontWeight: 'bold'
  };

const writeUserData = (userId, name, email, imageUrl) => {
firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
});
}


ReactDOM.render(
    <div>
        <button style={buttonStyle} onClick={writeUserData("test", "test", "test", "test")} >Get player info</button>
        <button style={buttonStyle} onClick={getPlayer} >Get player info</button>
        <button style={buttonStyle} onClick={getBootstrap} >Get bootstrap info</button>
    </div>,
  document.getElementById('app')
);


module.hot.accept();