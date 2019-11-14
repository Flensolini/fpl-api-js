import {doCORSRequest, reqType} from './baseRequest';

const getPlayer = (id) => {
  const data = doCORSRequest(`${reqType.element}${id}/`);
  return data;
}

export default getPlayer;