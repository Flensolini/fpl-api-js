import {doCORSRequest, reqType} from './baseRequest';

const getTeam = (id) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.entry}${id}`,
    data: ''
  }, handleTeamResponse);
}
  
const handleTeamResponse = (response) => {
  return response;
}

export default getTeam;