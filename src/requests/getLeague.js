import {doCORSRequest, reqType} from './baseRequest';

const getLeague = (id) => {
  const data = doCORSRequest(`${reqType.leagueClassicStanding}${id}/standings/`);
  return data;
}


export default getLeague;