import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  // TextInput,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Image_Path from '../../constants/Image_Path/Image_Path';
import navigationStrings from '../../constants/navigationStrings';
import Style from '../../Style';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import {TextInput, HelperText} from 'react-native-paper';
import AppLoader from '../../constants/AppLoader';

const {height, width} = Dimensions.get('screen');

const ForgetPassword = props => {
  const [email, setEmail] = useState('');
  const [check_Email, setCheck_Email] = useState(null);
  const [indicator, setIndicator] = useState(false);
  const [loader, setLoader] = useState(false);

  // ====== email Regex=======
  const email_regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // ====== email valodation======
  const email_validation = email => {
    if (email === '') {
      setCheck_Email('please enter email id');
    } else if (!email_regex.test(email)) {
      setCheck_Email('please enter valid email id');
    } else {
      setCheck_Email(null);
    }
  };
  // ======= validation =====
  const validation = () => {
    let flag = true;
    if (email === '') {
      console.log('please enter valid email');
      setCheck_Email('please enter email id');
      flag = false;
    }
    return flag;
  };
  // ========== Continue button ========
  const Continue_btn = () => {
    // setLoader(true);

    if (!email) {
      console.log('something went wrong');
      setCheck_Email('please enter email id');
    } else {
      // console.log(validation())
      // props.navigation.navigate(navigationStrings.Reset_password);
      setLoader(true);
      sendEmail_api();
    }
  };
  // ======== Send Temprary email =======
  const sendEmail_api = async () => {
    console.log('res', email);
    // setLoader(true);
    try {
      await axios({
        method: 'post',
        url: 'http://3.110.103.247/api/send-temporary-password/',
        data: {
          email: email,
        },
        headers: {'content-type': 'application/json'},
      })
        .then(res => {
          console.log('res', res.data);
          if (res?.status === 200) {
            setLoader(false);
            console.log('email check======>', res?.data?.status_code);
            if (res?.data?.status_code === 400) {
              console.log('=======>');
              setCheck_Email('please enter register email id');
            } else if (res?.data?.status_code === 200) {
              props.navigation.navigate(navigationStrings.Reset_password);
            }
          }
        })
        .catch(err => {
          setLoader(false);
          console.log('please check err', err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={Image_Path.Background}
          style={{flex: 1}}
          resizeMode="cover">
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                // backgroundColor: 'red',
                height: width * 0.21,
                width: width * 0.72,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
              source={Image_Path.Hitachi_Logo2}
            />
            <View
              style={{
                height: height * 0.44,
                justifyContent: 'space-between',
                width: width * 0.83,
                // marginTop: height * 0.02,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10,
                marginTop: width * 0.17,
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
                marginTop: 40,
              }}>
              {/* <View
              style={{
                flex: 0.6,
                backgroundColor: 'pink'
              }}> */}
              <Text
                style={{
                  color: '#3D3D3D',
                  fontSize: 18,
                  fontFamily: 'GothicA1-SemiBold',
                  marginTop: 36,
                }}>
                Forget Password
              </Text>
              <Text
                style={{
                  color: 'rgba(61, 61, 61, 0.8)',
                  fontSize: 14,
                  fontFamily: 'GothicA1-Regular',
                  marginTop: 20,
                }}>
                Enter your registered email for the verification process, we
                will send the reset code on your mail
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <View>
                  <TextInput
                    type="flat"
                    underlineColor="#1D2226"
                    activeUnderlineColor={'#CC0022'}
                    placeholder="Enter here"
                    keyboardType="email-address"
                    maxLength={50}
                    placeholderTextColor="#D8D8D8"
                    style={{
                      backgroundColor: 'white',
                      width: width * 0.76,
                      fontFamily: 'Montserrat-Regular',
                      fontSize: 14,
                    }}
                    onChangeText={txt => {
                      setEmail(txt), email_validation(txt);
                    }}
                    right={
                      <TextInput.Icon
                        icon={() => {
                          return (
                            <>
                              <Image
                                source={require('../../assets/images/mail.png')}
                                style={styles.img_icon}
                              />
                            </>
                          );
                        }}
                      />
                    }
                  />
                  <HelperText
                    style={Style.error_txt}
                    type="error"
                    visible={check_Email}>
                    {check_Email}
                  </HelperText>
                </View>
                {/* <View
                  style={{
                    // backgroundColor: 'red',
                    height: 40,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/images/mail.png')}
                    style={styles.img_icon}
                  />
                </View> */}
              </View>
              {/* {check_Email != null ? (
              <View style={Style.error_View}>
                <Text style={Style.error_txt}>{check_Email}</Text>
              </View>
            ) : null} */}
              <View
                style={{
                  height: 110,
                  justifyContent: 'space-between',
                  marginTop: 60,
                }}>
                <TouchableOpacity
                  style={styles.button_style}
                  onPress={() => Continue_btn()}>
                  <Text style={Style.button_text}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* </View> */}
          {/* =========== Activity indicator Modal ========== */}

          {indicator === true ? (
            <Modal animationType="slide" transparent={true} visible={indicator}>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  backgroundColor: '#00000090',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 70,
                    width: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                  }}>
                  {/* =====activity indicator === */}
                  <ActivityIndicator
                    size={50}
                    color="#04222C"
                    animating={indicator}
                    style={{alignSelf: 'center'}}
                  />
                </View>
              </View>
            </Modal>
          ) : null}
        </ImageBackground>
      </SafeAreaView>
      {loader ? <AppLoader /> : null}
    </>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  txt: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
  },
  button_style: {
    backgroundColor: '#CC0022',
    height: 44,
    borderRadius: 100,
    justifyContent: 'center',
    width: width * 0.58,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
  },
  img_icon: {
    height: 14,
    width: 17.54,
    tintColor: '#CC0022',
    alignSelf: 'center',
  },
});
