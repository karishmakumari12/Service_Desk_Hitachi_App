import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './Routes';
import {AppStack} from './Routes';

import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setSignIn, setDynamicUrl} from '../redux/actions';

import {Splash_Screen} from '../screens/Splash_Screen/Splash_Screen';
import {httpBaseUrlRequest} from '../config/httpBaseUrlRequest';
import {Get_Item} from '../components/GlobalStorage/Custom_Store';

const MainRoutes = () => {
  const [loader, setLoader] = useState(false);
  const {isSignIn} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {url} = httpBaseUrlRequest();
  // console.log('MAinRoute', url);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);

    checkSignedIn();
    // httpBaseUrlRequest();
    dispatch(setDynamicUrl(url));
  }, [url]);

  const checkSignedIn = async () => {
    Get_Item('userDetails', res => {
      if (res.empid != null) {
        dispatch(setSignIn(true));
      } else {
        dispatch(setSignIn(false));
      }
    });
    // AsyncStorage.getItem('token').then(value => {
    //   if (value != null) {
    //     dispatch(setSignIn(true));
    //     // console.log('sotred token ', value);
    //   } else {
    //     dispatch(setSignIn(false));
    //     // console.log('not stored');
    //   }
    // });
  };

  return (
    <NavigationContainer>
      {loader ? isSignIn ? <AppStack /> : <AuthStack /> : <Splash_Screen />}
      {/* <Splash_Screen /> */}
    </NavigationContainer>
  );
};
export default MainRoutes;
