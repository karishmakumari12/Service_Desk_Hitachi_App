import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import Image_Path from '../../constants/Image_Path/Image_Path';
import DeviceInfo from 'react-native-device-info';
import {useSelector, useDispatch} from 'react-redux';
import {setUniqueId, setDeviceName} from '../../redux/actions';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export const Splash_Screen = props => {
  const {isSignIn} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    DeviceInfo.getDeviceName().then(deviceName => {
      // console.log('deviceName', deviceName);
      dispatch(setDeviceName(deviceName));
    });

    DeviceInfo.getUniqueId().then(uniqueId => {
      // console.log('uniqueId', uniqueId);
      dispatch(setUniqueId(uniqueId));
    });
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor="black" />
      <Image
        style={{
          backgroundColor: 'transparent',
          height: width * 0.21,
          width: width * 0.72,
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
        source={Image_Path.Hitachi_Logo2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
