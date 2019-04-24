import {doCORSRequest, reqType} from './baseRequest';

export default getBootstrap = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.bootstrap,
    data: ''
  }, handleBootstrapResponse);
}
  
const handleBootstrapResponse = (response) => {
  return response;
}