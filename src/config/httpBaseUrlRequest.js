import {View, Text} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setDynamicUrl} from '../redux/actions';

export const httpBaseUrlRequest = () => {
  const {dynamicUrl} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  try {
    axios
      .get('https://test-backend-demo.onrender.com/api/v1/linkedIn')
      .then(res => {
        // console.log('Api Testing', res.data.linkedInData.usename);
        // setUrl(res.data.linkedInData.usename);
        setUrl(
          'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/',
        );
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }

  return {url};
};
