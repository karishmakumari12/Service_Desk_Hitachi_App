import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import style from './style';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

const CustomDrawere = props => {
  console.log('Draerr', props);
  return (
    <View style={style.mainContainer}>
      <DrawerContentScrollView
        {...props}
        // contentContainerStyle={{borderColor:"red",borderWidth:3}}
        >
     
        {/* ===logo=== */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Image
            style={style.logoImg}
            source={require('../../assets/images/logo_name.png')}
          />
          <Image
            style={style.cross}
            source={require('../../assets/images/cross.png')}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
        label="Help"
        // onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
        {/* ====View=== */}
        {/* <View style={{borderWidth: 0.2, borderColor: 'white', marginTop: 40}} /> */}
        {/* ===Home== */}
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <View style={{flexDirection: 'row', marginTop: 50}}>
            <Image
              style={style.homeImg}
              source={require('../../assets/images/home.png')}
            />
            <Text style={style.homeTxt}>Home</Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate('CompanyPolicy')}>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <Image
              style={style.homeImg}
              source={require('../../assets/images/companyPolicy.png')}
            />
            <Text style={style.homeTxt}>Company Policies</Text>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Setting')}>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <Image
              style={style.homeImg}
              source={require('../../assets/images/setting.png')}
            />
            <Text style={style.homeTxt}>Setting</Text>
          </View>
        </TouchableOpacity> */}
        {/* ====View=== */}
        {/* <View
          style={{borderWidth: 0.2, borderColor: 'white', marginTop: 250}}
        /> */}
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <Image
              style={style.homeImg}
              source={require('../../assets/images/sidebar_logout.png')}
            />
            <Text style={style.homeTxt}>Logout</Text>
          </View>
        </TouchableOpacity> */}
      </DrawerContentScrollView>
      {/* <View><Text>dsjfhgdshsdsdhfsdh</Text></View> */}
      {/* <Text style={{ color:"red" }}>{focused ? 'green' : 'blue'}</Text>. */}
    </View>
  );
};

export default CustomDrawere;
