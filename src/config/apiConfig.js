export const baseurl = 'http://3.110.123.67';
let login = `${baseurl}/auth`;
let other = `${baseurl}/api`;

const apiConfig = {
  login: `${login}/login`,
  status: `${other}/Status_fetch/?`,
  
  getTicket: `${other}/get_tickets/`,
  viewTicket: `${other}/get_ticketDetails/`,
  updateTicket: `${other}/update_ticket/`,
  category:`${other}/Category_fetch/`,
  severity:`${other}/Severity_fetch/`,
  createticket:`${other}/createticket/`,
  send_temporary:`${other}/send-temporary-password/`,
  change_password:`${other}/change-password/`
};

export default apiConfig;


