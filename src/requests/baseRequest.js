const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/drf/';
export const reqType = {
  bootstrap : 'bootstrap', //Overview
  element : 'element-summary/', //Players (playderID)
  event : 'events', // Get all gameweeks
  elementTypes: 'element-types', // Get all player positions
  gameweekFixtures: 'fixtures/?event' //Get all fixtures for a specified gameweek (gameweek number)
}

export const doCORSRequest = (options, callback) => {
    const req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open(options.method, proxyURL + baseURL + options.url);
    req.onload = req.onerror = function() {
      callback(req.response);
    };
    req.send(options.data);
}