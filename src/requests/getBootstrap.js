import {doCORSRequest, reqType} from './baseRequest';

const getBootstrap = async () => {
  const data = doCORSRequest(reqType.bootstrap);
  return data;
}

export default getBootstrap;