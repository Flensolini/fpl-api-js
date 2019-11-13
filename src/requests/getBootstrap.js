import {doCORSRequest, reqType} from './baseRequest';

const getBootstrap = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.bootstrap,
    data: ''
  }, handleBootstrapResponse);
}
  
const handleBootstrapResponse = (response) => {
  return response;
}
export default getBootstrap;