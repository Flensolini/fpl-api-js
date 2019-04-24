import {doCORSRequest, reqType} from './baseRequest';

const getGameweeks = () => {
  const data = doCORSRequest(reqType.events);
  return data;
}

export default getGameweeks;