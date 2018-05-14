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
    console.log(response);
    elements.forEach(function(element) {
      if(element.status == 'a'){
        const player = createPlayer(element)
        players.push(player);
      }
    });

    players.sort(sortPlayers);

    players.forEach((player) => {
      console.log(player);
      writeUserData(player);
    });
  }

  const createPlayer = (element) => {
    let player = {};

    const goalPoints = element.goals_scored + element.assists;

    player.id = element.id;
    player.name = element.web_name;
    player.first_name = element.first_name;

    player.bonus = element.bonus;
    player.bps = element.bps;
    player.minutes = element.minutes;
    player.goals = element.goals_scored;
    player.assists = element.assists;
    player.goal_points = goalPoints;
    player.points_per_game = element.points_per_game;

    player.red_cards = element.red_cards;
    player.total_points = element.total_points; 
    player.conceded = element.goals_conceded;
    player.saves = element.saves;
    player.own_goals = element.own_goals;
    player.penalties_missed = element.penalties_missed;
    player.penalties_saved = element.penalties_saved;

    player.minutes_per_goalPoints =0;

    if(element.minutes > 0 && goalPoints > 0){
      player.minutes_per_goalPoints = element.minutes/goalPoints;
    }

    return player;
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
        first_name: player.first_name,
        bonus: player.bonus,
        minutes: player.minutes,
        goals: player.goals,
        assists: player.assists,
        goal_points: player.goal_points,
        points_per_game: player.points_per_game,
        red_cards: player.red_cards,
        total_points: player.total_points,
        conceded: player.conceded,
        saves: player.saves,
        own_goals: player.own_goals,
        penalties_missed: player.penalties_missed,
        penalties_saved: player.penalties_saved,
        minutes_per_goalPoints: player.minutes_per_goalPoints




    });
  }