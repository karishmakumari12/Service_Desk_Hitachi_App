export const SET_ISSIGNIN = 'SET_ISSIGNIN';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_EMPID = 'SET_EMPID';
export const SET_EMPMAIL = 'SET_EMPMAIL';
export const SET_EMPLOCATION = 'SET_EMPLOCATION';
export const SET_DEPARTMENT = 'SET_DEPARTMENT';
export const SET_LOADER = 'SET_LOADER';
export const SET_UNIQUEID = 'SET_UNIQUEID';
export const SET_DEVICE_NAME = 'SET_DEVICE_NAME';
export const SET_DYNAMIC_URL = 'SET_DYNAMIC_URL';
export const SET_EYE = 'SET_EYE';
export const SET_DESIGNATION = 'SET_DESIGNATION';

export const setSignIn = isSignIn => dispatch => {
  dispatch({
    type: SET_ISSIGNIN,
    payload: isSignIn,
  });
};

export const setUserName = userName => dispatch => {
  dispatch({
    type: SET_USERNAME,
    payload: userName,
  });
};

export const setEmployeeId = EmpId => dispatch => {
  dispatch({
    type: SET_EMPID,
    payload: EmpId,
  });
};

export const setEmpMail = empMail => dispatch => {
  dispatch({
    type: SET_EMPMAIL,
    payload: empMail,
  });
};

export const setEmpLocation = empLocation => dispatch => {
  dispatch({
    type: SET_EMPLOCATION,
    payload: empLocation,
  });
};

export const setEmpDepartment = empDepartment => dispatch => {
  dispatch({
    type: SET_DEPARTMENT,
    payload: empDepartment,
  });
};

export const setLoader = loader => dispatch => {
  dispatch({
    type: SET_LOADER,
    payload: loader,
  });
};

export const setUniqueId = UniqueId => dispatch => {
  dispatch({
    type: SET_UNIQUEID,
    payload: UniqueId,
  });
};

export const setDeviceName = deviceName => dispatch => {
  dispatch({
    type: SET_DEVICE_NAME,
    payload: deviceName,
  });
};

export const setDynamicUrl = dynamicUrl => dispatch => {
  dispatch({
    type: SET_DYNAMIC_URL,
    payload: dynamicUrl,
  });
};

export const setEye = eye => dispatch => {
  dispatch({
    type: SET_EYE,
    payload: eye,
  });
};

export const setDesignation = designation => dispatch => {
  dispatch({
    type: SET_DESIGNATION,
    payload: designation,
  });
};
