import {doCORSRequest, reqType} from './baseRequest';

export default getGameweeks = () => {
  doCORSRequest({
    method: 'GET',
    url: reqType.events,
    data: ''
  }, handleGameweekResponse);
}
  
const handleGameweekResponse = (response) => {
  return response;
}