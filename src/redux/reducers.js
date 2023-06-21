import {
  SET_ISSIGNIN,
  SET_USERNAME,
  SET_EMPID,
  SET_EMPMAIL,
  SET_EMPLOCATION,
  SET_DEPARTMENT,
  SET_LOADER,
  SET_DEVICE_NAME,
  SET_UNIQUEID,
  SET_DYNAMIC_URL,
  SET_EYE,
  SET_DESIGNATION,
} from './actions';

const initialState = {
  isSignIn: false,
  userName: '',
  EmpId: '',
  empMail: '',
  empLocation: '',
  empDepartment: '',
  loader: false,
  UniqueId: '',
  deviceName: '',
  dynamicUrl: {
    login: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    status: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    getTicket: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    viewTicket: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    updateTicket: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    send_temporary: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
    change_password: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
  },
  eye: true,
  designation: '',
};

function userReducer(state = initialState, actions) {
  switch (actions.type) {
    case SET_ISSIGNIN:
      return {...state, isSignIn: actions.payload};
    case SET_USERNAME:
      return {...state, userName: actions.payload};
    case SET_EMPID:
      return {...state, EmpId: actions.payload};
    case SET_EMPMAIL:
      return {...state, empMail: actions.payload};
    case SET_EMPLOCATION:
      return {...state, empLocation: actions.payload};
    case SET_DEPARTMENT:
      return {...state, empDepartment: actions.payload};
    case SET_LOADER:
      return {...state, loader: actions.payload};
    case SET_DEVICE_NAME:
      return {...state, deviceName: actions.payload};
    case SET_UNIQUEID:
      return {...state, UniqueId: actions.payload};
    case SET_DYNAMIC_URL:
      return {
        ...state,
        dynamicUrl: {
          login: `${actions.payload}`,
          status: `${actions.payload}statusfetch`,
          getTicket: `${actions.payload}ticketdetails`,
          viewTicket: `${actions.payload}ticketdetails`,
          updateTicket: `${actions.payload}updateticket`,
          send_temporary: `${actions.payload}`,
          change_password: `${actions.payload}`,
        },
      };
    case SET_EYE:
      return {...state, eye: actions.payload};
    case SET_DESIGNATION:
      return {...state, designation: actions.payload};
    default:
      return state;
  }
}

export default userReducer;
