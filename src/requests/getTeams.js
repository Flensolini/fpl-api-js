import {doCORSRequest, reqType} from './baseRequest';

export const getTeams = () => {
    doCORSRequest({
      method: 'GET',
      url: reqType.teams,
      data: ''
    }, handleTeamResponse);
  }

  const handleTeamResponse = (response) => {
    console.log(response); 
  }