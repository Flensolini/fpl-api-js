import React from 'react';
import ReactDOM from 'react-dom';
import * as Requests from './requests/requests';
import DataTable from './components/DataTable.jsx';


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
    background: '#b2404d',
    color: 'white',
    padding: '15px 40px',
    margin: '20px',
    boxShadow: 'none',
    border: 'none',
    fontWeight: 'bold'
  };

const getPlayerHandler = () => {
    Requests.getPlayer('18');
}


ReactDOM.render(
    <div>
        <button style={buttonStyle} onClick={getPlayerHandler} >Get player info</button>
        <button style={buttonStyle} onClick={Requests.getBootstrap} >Update player data</button>
        <hr/>
        <DataTable />
    </div>,
  document.getElementById('app')
);


module.hot.accept();