import {doCORSRequest, reqType} from './baseRequest';

export const getPlayer = () => {
    doCORSRequest({
      method: 'GET',
      url: reqType.element,
      data: ''
    }, getPlayerResponse);
  }
  
  const getPlayerResponse = (response) => {
    console.log(response);
  }