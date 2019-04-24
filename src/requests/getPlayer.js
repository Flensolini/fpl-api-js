import {doCORSRequest, reqType} from './baseRequest';

export default getPlayer = (id) => {
  doCORSRequest({
    method: 'GET',
    url: `${reqType.element}${id}`,
    data: ''
  }, handlePlayerResponse);
}

const handlePlayerResponse = (response) => {
  return response;
}