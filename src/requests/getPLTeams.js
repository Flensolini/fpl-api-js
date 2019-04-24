import {doCORSRequest, reqType} from './baseRequest';

export default getPLTeams = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.teams,
    data: ''
  }, handlePLTeamResponse);
}

const handlePLTeamResponse = (response) => {
  return response; 
}