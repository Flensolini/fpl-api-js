import {doCORSRequest, reqType} from './baseRequest';

export default getTeamyByGW = (id, gameweek) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.entry}${id}${reqType.event}${gameweek}/picks`,
    data: ''
  }, handleTeamResponse);
}
  
const handleTeamResponse = (response) => {
  return response;
}