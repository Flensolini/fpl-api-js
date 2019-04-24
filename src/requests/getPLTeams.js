import {doCORSRequest, reqType} from './baseRequest';

export const getPLTeams = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.teams,
    data: ''
  }, handlePLTeamResponse);
}

const handlePLTeamResponse = (response) => {
  return response; 
}