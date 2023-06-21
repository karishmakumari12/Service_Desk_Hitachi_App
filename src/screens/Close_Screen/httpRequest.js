import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setUserName, setEmployeeId, setLoader} from '../../redux/actions';
import apiConfig from '../../config/apiConfig';
import axios from 'axios';

export const HttpRequest = () => {
    const [incident, setIncident] = useState([]);
  const [currentOpen, setCurrentOpen] = useState();
  const [inactiveIncident, setInactiveIncident] = useState();
  const {userName, EmpId, loader} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    GetIncident();
  }, []);

    const GetIncident = () => {
        dispatch(setLoader(false));
        AsyncStorage.getItem('employeeId').then(val => {
          if (val != null) {
            dispatch(setEmployeeId(val));
            console.log('HttpRequest', val);
    
            try {
              axios
                .post(apiConfig.getTicket, {
                  empid: val,
                  status: 'inactive',
                })
                .then(response => {
                  // console.log('from api', response.data);
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
      };
  return {incident}
}