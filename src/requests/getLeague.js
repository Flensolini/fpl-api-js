import {doCORSRequest, reqType} from './baseRequest';

const getLeague = (id) => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/`);
  return data;
}


export default getLeague;