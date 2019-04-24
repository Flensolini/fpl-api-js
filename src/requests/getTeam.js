import {doCORSRequest, reqType} from './baseRequest';

export default getTeam = (id) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.entry}${id}`,
    data: ''
  }, handleTeamResponse);
}
  
const handleTeamResponse = (response) => {
  return response;
}