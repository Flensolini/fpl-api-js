import {doCORSRequest, reqType} from './baseRequest';

const getTeam = (id) => {
  const data = doCORSRequest(`${reqType.entry}/${id}/`);
  return data;
}

export default getTeam;