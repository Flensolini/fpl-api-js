import {doCORSRequest, reqType} from './baseRequest';

export const getBootstrap = () => {
    doCORSRequest({
      method: 'GET',
      url: reqType.bootstrap,
      data: ''
    }, getBootstrapResponse);
  }
  
  const getBootstrapResponse = (response) => {
    console.log(response);
  }