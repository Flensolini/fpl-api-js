import {doCORSRequest, reqType} from './baseRequest';

const getPLTeams = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.teams,
    data: ''
  }, handlePLTeamResponse);
}

const handlePLTeamResponse = (response) => {
  return response; 
}

export default getPLTeams;