import {doCORSRequest, reqType} from './baseRequest';

export const getLeague = (id) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.leagueClassicStanding}${id}`,
    data: ''
  }, handleLeagueResponse);
}
  
const handleLeagueResponse = (response) => {
  return response;
}