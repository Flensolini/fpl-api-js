import {doCORSRequest, reqType} from './baseRequest';

export const getBootstrap = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.bootstrap,
    data: ''
  }, handleBootstrapResponse);
}
  
const handleBootstrapResponse = (response) => {
  return response;
}