import React from 'react';
import ReactDOM from 'react-dom';
import * as Requests from './requests/requests';
import DataTable from './components/DataTable.jsx';
import Header from './components/Header.jsx';

require('./style/style.less')

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
    background: '#990000',
    color: 'white',
    padding: '15px 40px',
    margin: '20px 20px 0 0',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'

  };

const getPlayerHandler = () => {
    Requests.getPlayer('18');
}


ReactDOM.render(
    <div>
        <Header bgColor="#990000" text='FPL tool' textColor='#fff'/>
        <div className="content">
          <button style={buttonStyle} onClick={getPlayerHandler} >Get player info</button>
          <button style={buttonStyle} onClick={Requests.getBootstrap} >Update player data</button>
          <button style={buttonStyle} onClick={Requests.getTeams} >Get teams data</button>
          <hr/>
          <DataTable />
        </div>
    </div>,
  document.getElementById('app')
);


module.hot.accept();