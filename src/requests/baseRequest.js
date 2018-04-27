const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://fantasy.premierleague.com/drf/';
export const reqType = {
  bootstrap : 'bootstrap',
  element : 'element-summary/70'
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