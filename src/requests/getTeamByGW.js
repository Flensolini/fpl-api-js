import {doCORSRequest, reqType} from './baseRequest';

const getTeamyByGW = (id, gameweek) => {
  const data = doCORSRequest(`${reqType.entry}/${id}/${reqType.event}/${gameweek}/picks/`);
  return data;
}

export default getTeamyByGW;