import {doCORSRequest, reqType} from './baseRequest';

const getGameweeks = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.events,
    data: ''
  }, handleGameweekResponse);
}
  
const handleGameweekResponse = (response) => {
  return response;
}

export default getGameweeks;