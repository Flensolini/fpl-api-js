import {doCORSRequest, reqType} from './baseRequest';

const getPLTeams = () => {
  const data = doCORSRequest(reqType.teams);
  return data;
}

export default getPLTeams;