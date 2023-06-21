import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSignIn,
  setUserName,
  setEmployeeId,
  setLoader,
} from '../../redux/actions';
import apiConfig from '../../config/apiConfig';
import {Get_Item} from '../../components/GlobalStorage/Custom_Store';
export const HttpRequest = () => {
  const [incident, setIncident] = useState([]);
  // const [loader, setLoader] = useState(false);
  const [Incident, setIncide] = useState(false);
  const [currentOpen, setCurrentOpen] = useState();
  const [inactiveIncident, setInactiveIncident] = useState();
  const {userName, EmpId, loader, dynamicUrl} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    GetIncident();
    GetInactiveIncident();
  }, []);

  const GetIncident = () => {
    dispatch(setLoader(false));
    Get_Item('userDetails', res => {
      // console.log("res", res.empid)
      if (res.empid != null) {
        dispatch(setEmployeeId(res.empid));
        // console.log('async api call', res.empid);

        try {
          axios
            .post(
              `${dynamicUrl.getTicket}`,
              {
                empid: res.empid,
                status: 'active',
                action: 'GetTicket',
              },
              {
                headers: {
                  Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
                  'content-type': 'application/json',
                },
              },
            )
            .then(response => {
              console.log('from api', response.data);
              setIncident(response?.data?.Tickets);
              // setIncide(true);
              // console.log("items", response?.data?.Tickets.length)
              dispatch(setLoader(true));
              setCurrentOpen(response?.data?.Tickets.length);
            })
            .catch(error => {
              console.log(error);
              dispatch(setLoader(true));
            });
        } catch (error) {
          console.log('error');
          dispatch(setLoader(true));
        }
      } else {
        dispatch(setEmployeeId('Emp Id'));
      }
    });

    return 'hello';
  };

  const GetInactiveIncident = () => {
    dispatch(setLoader(false));
    Get_Item('userDetails', res => {
      // console.log("res", res.empid)
      if (res.empid != null) {
        dispatch(setEmployeeId(res.empid));
        // console.log('async api call', res.empid);

        try {
          axios
            .post(
              `${dynamicUrl.getTicket}`,
              {
                empid: res.empid,
                status: 'inactive',
                action: 'GetTicket',
              },
              {
                headers: {
                  Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
                  'content-type': 'application/json',
                },
              },
            )
            .then(response => {
              // console.log('from api GetInactiveIncident', response.data);
              // console.log('items inactive', response?.data?.Tickets.length);
              setInactiveIncident(response?.data?.Tickets.length);
            })
            .catch(error => {
              console.log(error);
              dispatch(setLoader(true));
            });
        } catch (error) {
          console.log('error');
          dispatch(setLoader(true));
        }
      } else {
        dispatch(setEmployeeId('Emp Id'));
      }
    });
  };

  return {incident, loader, currentOpen, inactiveIncident, GetIncident};
};
