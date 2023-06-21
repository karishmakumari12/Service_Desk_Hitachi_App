import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Stylesheet from './Stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import Lottie from 'lottie-react-native';
const Custom_Modal = ({modalvisible, title, onDismiss}) => {
  console.log('---->', modalvisible);

  return (
    <Modal
      isVisible={modalvisible}
      backdropOpacity={0.2}
      onBackdropPress={onDismiss}
      backdropColor={'#000000'}>
      <View
        style={{
          backgroundColor: '#ffffff',
          // height: 202,
          borderRadius: 9,
          padding: 15,
          justifyContent: 'space-between',
        }}>
        <Lottie
          style={{height: 100, width: 100, alignSelf: 'center'}}
          source={require('../../assets/json/done.json')}
          autoPlay
          loop
        />
        <View>
          <Text style={Stylesheet.modal_txt}>
            {title}
            {/* Your Password has been changed successfully. */}
          </Text>
          {/* <Text style={Stylesheet.modal_txt}>Sign in with new Credentials</Text> */}
        </View>
        <TouchableOpacity
        style={Stylesheet.linearGradient}
          onPress={onDismiss}
          >
          <LinearGradient
            style={Stylesheet.linearGradient}
            colors={['#F12547', '#D91636']}>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>OK</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Custom_Modal;

const styles = StyleSheet.create({});
