import {doCORSRequest, reqType} from './baseRequest';

const getTeamyByGW = (id, gameweek) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.entry}${id}${reqType.event}${gameweek}/picks`,
    data: ''
  }, handleTeamResponse);
}
  
const handleTeamResponse = (response) => {
  return response;
}

export default getTeamyByGW;