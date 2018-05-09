import {doCORSRequest, reqType} from './baseRequest';
const firebase = require("firebase/app");

export const getBootstrap = () => {
    doCORSRequest({
      method: 'GET',
      url: reqType.bootstrap,
      data: ''
    }, getBootstrapResponse);
  }
  
  const getBootstrapResponse = (response) => {
    const elements = response.elements;

    let players = [];
    elements.forEach(function(element) {
      const goals_assists = element.assists + element.goals_scored;
      if(goals_assists > 0 && element.minutes > 500){
        let player = {};
        player.name = element.web_name;
        player.id = element.id;
        player.minutes_per_goalPoints = element.minutes/goals_assists;
        player.minutes = element.minutes;
        player.goals = element.goals_scored;
        player.assists = element.assists;
        
        players.push(player);
      }
    });

    players.sort(sortPlayers);

    players.forEach((player) => {
      writeUserData(player);
    });
  }
  

  const sortPlayers = (a,b) => {
    if (a.minutes_per_goalPoints < b.minutes_per_goalPoints)
    return -1;
  if (a.minutes_per_goalPoints > b.minutes_per_goalPoints)
    return 1;
  return 0;
  };

  const writeUserData = (player) => {
    firebase.database().ref('players/' + player.id).set({
        name: player.name,
        minutes: player.minutes,
        goals : player.goals,
        assists: player.assists,
        minutes_per_point: player.minutes_per_goalPoints
    });
  }