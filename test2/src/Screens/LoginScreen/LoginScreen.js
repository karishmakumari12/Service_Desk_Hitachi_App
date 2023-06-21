import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center', fontSize: 25,fontFamily: 'NotoSansTC-Black'}}>
        LoginScreen
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyDrawer');
        }}
        style={{
          height: 50,
          width: 100,
          borderWidth: 2,
          borderColor: 'red',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: '800',fontFamily: 'NotoSansTC-Black',}}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
