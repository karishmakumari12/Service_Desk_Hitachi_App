import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setEmployeeId, setLoader, setEye} from '../../redux/actions';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function httpLoginRequest (successCallBack, errorCallBack) {
//   const {isSignIn, deviceName, UniqueId, dynamicUrl, loader} = useSelector(
//     state => state.userReducer,
//   );
  //   const [loader, setLoader] = useState(false);
//   const dispatch = useDispatch();/
  try {
    await axios({
      method: 'post',
      url: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/user-login',
      data: {
        action: 'login',
        emp_id: 'M7839',
        password: 'Testuser&123',
        device_id: "123"
      },
      headers: {
        Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
        'content-type': 'application/json',
      },
    })
      .then(res => {
        console.log('response', res.data);
        successCallBack(res.data);
        // if (res?.status === 200) {
        //   if (res?.data?.status === 200) {
        //     AsyncStorage.setItem('username', res.data.user.name);
        //     // AsyncStorage.setItem('id', empid);
        //     // AsyncStorage.setItem('password', password);
        //     AsyncStorage.setItem('token', res.data.user.token);
        //     AsyncStorage.setItem('employeeId', res.data.user.emp_id);
        //     AsyncStorage.setItem('empMail', res.data.user.email);
        //     AsyncStorage.setItem('location', res.data.user.location);
        //     AsyncStorage.setItem('department', res.data.user.department);
        //     // setIndicator(false);
        //     dispatch(setEye(true));
        //     dispatch(setLoader(false));
        //     dispatch(setSignIn(true));
        //     dispatch(setEmployeeId(res.data.user.emp_id));
        //     // props.navigation.navigate(navigationStrings.Showdata);
        //   } else if (res?.data?.status === 401) {
        //     dispatch(setLoader(false));
        //     // setIndicator(false);
        //     error_fun();
        //   }
        // }
        // setIndicator(false);
        // dispatch(setLoader(false));
      })
      .catch(err => {
        // setIndicator(false);
        // dispatch(setLoader(false));

        // error_fun1();
        console.log("===ERror",err)
      });
  } catch (error) {
    console.log(error);
    // dispatch(setLoader(false));
  }
  return
};

// try {
//     await axios
//       .get('https://test-backend-demo.onrender.com/api/v1/linkedIn')
//       .then(res => {
//         console.log('Api Testing', res.data);
//         successCallBack(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(error);
//   }
