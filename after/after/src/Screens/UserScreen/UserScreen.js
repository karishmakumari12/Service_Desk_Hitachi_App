import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';

const UserScreen = () => {
  return (
    <View style={style.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={style.clip}>
        <Image
            style={style.ProfilePersonImg}
            source={require('../../assets/images/profile_personal.png')}
          />
        </View>
        <View style={style.clip}>
        <Image
            style={style.ProfilePersonImg}
            source={require('../../assets/images/work_details.png')}
          />
        </View>
        <View style={style.clip}>
        <Image
            style={style.ProfilePersonImg}
            source={require('../../assets/images/bank_details.png')}
          />
        </View>
       
      </View>
    </View>
  );
};

export default UserScreen;
