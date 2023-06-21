import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Image_Path from '../../constants/Image_Path/Image_Path';
import navigationStrings from '../../constants/navigationStrings';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import Style from '../../Style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import AppLoader from '../../constants/AppLoader';

const {height, width} = Dimensions.get('screen');

const Reset_password_Screen = props => {
  const [otp, setOtp] = useState('');
  const [empId, setEmpId] = useState('');
  const [errorEmpID, setErrorEmpId] = useState('');
  const [errorotp, setErrorOtp] = useState(null);
  const [password, setPassword] = useState('');
  const [confirm_Password, setConfirm_Password] = useState('');
  const [errorpassword, setErrorPassword] = useState(null);
  const [errorconfirm_Password, setErrorConfirm_Password] = useState(null);
  const [emp, setEmp] = useState('');
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [indicator, setIndicator] = useState(false);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  // ============== password regex ================
  var Password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  // ====== otp or confirm password======
  const valid_otp = () => {
    if (otp === '') {
      setErrorOtp('please enter otp');
    } else {
      setErrorOtp(null);
    }
  };
  const valid_confirm = () => {
    if (confirm_Password === '') {
      setErrorConfirm_Password('please enter otp');
    } else {
      setErrorConfirm_Password(null);
    }
  };

  //  ======= check pasword and confirm password ====
  const Password_validation = password => {
    if (password === '') {
      setErrorPassword('please enter password');
    } else if (/([A-Z+])/g.test(password) && password.length < 8) {
      setErrorPassword(
        'please enter a special character and length must be 8 digit',
      );
    } else if (!Password_regex.test(password)) {
      setErrorPassword('please enter valid password');
    } else {
      setErrorPassword(null);
    }
  };

  // ============= continue button ========
  const Continue_btn = () => {
    if(emp === ''){
      console.log('otp');
      setErrorEmpId('please enter Emp-ID');
    } else if (otp === '') {
      console.log('otp');
      setErrorOtp('please enter otp');
    } else if (password === '') {
      setErrorPassword('please enter password');
    } else if (confirm_Password === '') {
      console.log('confirm password');
      setErrorConfirm_Password('please enter confirm password');
    } else if (password !== confirm_Password) {
      console.log('password not match');
    } else {
      console.log('sucesssfully');
      Reset_password_api();
    }
  };
  // ======== reset password email =======
  const Reset_password_api = async () => {
    setLoader(true);
    await axios({
      method: 'post',
      url: apiConfig.change_password,
      data: {
        Emp_code: emp,
        new_password: password,
        old_password: otp,
      },
      headers: {'content-type': 'application/json'},
    })
      .then(res => {
        if (res?.status === 200) {
          console.log('email check======>', res?.data?.status_code);
          if (res?.data?.status_code === 400) {
            setErrorOtp('please check otp');
          } else if (res?.data?.status_code === 200) {
            setError('password reset sucessfully');
            setLoader(false);
            setTimeout(() => {
              setLoader(false);
              props.navigation.navigate(navigationStrings.LoginScreen);
            }, 2000);
            console.log('sucessfully');
          }
        }
      })
      .catch(err => {
        setLoader(false);
        console.log('please check err', err);
      });
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          style={{
            flex: 1,
          }}
          source={Image_Path.Background}
          resizeMode="cover">
          <KeyboardAwareScrollView
            behavior="padding"
            style={{
              // backgroundColor: 'green',
              flex: 1,
            }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                // height: height,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'green',
                justifyContent: 'space-around',
                padding: 24,
              }}>
              <Image
                style={{
                  backgroundColor: 'transparent',
                  height: width * 0.21,
                  width: width * 0.72,
                  alignSelf: 'center',
                  marginTop: 100,
                  resizeMode: 'contain',
                }}
                source={Image_Path.Hitachi_Logo2}
              />
              <View
                style={{
                  // justifyContent: 'space-between',
                  width: width * 0.83,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 10,
                  marginTop: width * 0.17,
                  shadowColor: '#000',
                  shadowOffset: {width: 1, height: 1},
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                  // alignSelf: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Text style={styles.change_txt}>Change Password</Text>
                  <Text style={styles.change_txt2}>
                    Enter the reset code sent on your registered Email and set
                    new password
                  </Text>
                  {/* <View
                  style={{
                    // height: 220,
                    justifyContent: 'space-between',
                    marginTop: 25,
                    backgroundColor: 'red'
                  }}> */}
                  <View style={styles.feild_view}>
                    <TextInput
                      type="flat"
                      underlineColor="#1D2226"
                      activeUnderlineColor={'#CC0022'}
                      label="Emp Code"
                      value={emp}
                      onChangeText={txt => {
                        setEmp(txt);
                      }}
                      style={{
                        backgroundColor: 'white',
                        width: width * 0.78,
                        fontFamily: 'GothicA1-Regular',
                        fontSize: 14,
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => {
                            return (
                              <>
                                <Image
                                  source={Image_Path.User_Icon}
                                  style={{
                                    width: 17,
                                    height: 17,
                                    tintColor: '#CC0022',
                                  }}
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
                      visible={errorEmpID}>
                      {errorEmpID}
                    </HelperText>
                    {/* <View
                      style={{
                        height: 40,
                        width: 30,
                        // backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Image_Path.User_Icon}
                        style={{
                          width: 17,
                          height: 17,
                          tintColor: '#CC0022',
                        }}
                      />
                    </View> */}

                    {/* <TextInput
                    placeholder="Emp code"
                    style={[
                      Style.txtfeild,
                      styles.txt_input,
                      {
                        borderBottomColor: '#babdc2',
                      },
                    ]}
                    placeholderTextColor="#D8D8D8"
                    onChangeText={txt => {
                      setEmp(txt);
                    }}
                  /> */}
                  </View>

                  <View style={styles.feild_view}>
                    <TextInput
                      type="flat"
                      underlineColor="#1D2226"
                      activeUnderlineColor={'#CC0022'}
                      label="Reset Code"
                      value={otp}
                      onChangeText={txt => {
                        setOtp(txt), valid_otp();
                      }}
                      style={{
                        backgroundColor: 'white',
                        width: width * 0.78,
                        fontFamily: 'GothicA1-Regular',
                        fontSize: 14,
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => {
                            return (
                              <>
                                <Image
                                  source={Image_Path.Lock_Icon}
                                  style={{
                                    width: 17,
                                    height: 17,
                                    tintColor: '#CC0022',
                                  }}
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
                      visible={errorotp}>
                      {errorotp}
                    </HelperText>
                    {/* <View
                      style={{
                        height: 40,
                        width: 30,
                        // backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Image_Path.Lock_Icon}
                        style={{
                          width: 17,
                          height: 17,
                          tintColor: '#CC0022',
                        }}
                      />
                    </View> */}

                    {/* <TextInput
                    placeholder="Reset Code"
                    style={[
                      Style.txtfeild,
                      styles.txt_input,
                      {
                        borderBottomColor: '#babdc2',
                      },
                    ]}
                    placeholderTextColor="#D8D8D8"
                    onChangeText={txt => {
                      setOtp(txt), valid_otp();
                    }}
                  /> */}
                  </View>

                  {/* {errorotp != null ? (
                    <View style={Style.error_View}>
                      <Text style={Style.error_txt}>{errorotp}</Text>
                    </View>
                  ) : null} */}
                  {/* <View style={styles.feild_view}> */}
                  {/* <Image
                    source={Image_Path.Reset_Lock}
                    style={Style.img_icon}
                  /> */}

                  <View
                    style={[
                      styles.feild_view
                    ]}>
                    <TextInput
                      type="flat"
                      underlineColor="#1D2226"
                      activeUnderlineColor={'#CC0022'}
                      label="Change password"
                      value={password}
                      secureTextEntry={eye ? true : false}
                      onChangeText={txt => {
                        setPassword(txt), Password_validation(txt);
                      }}
                      style={{
                        backgroundColor: 'white',
                        width: width * 0.78,
                        fontFamily: 'GothicA1-Regular',
                        fontSize: 14,
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => {
                            return (
                              <>
                                <TouchableOpacity
                                  onPress={() => {
                                    console.log('eye', eye);
                                    eye ? setEye(false) : setEye(true);
                                  }}>
                                  <Image
                                    style={{
                                      height: 11.28,
                                      width: 17.54,
                                      tintColor: '#CC0022',
                                    }}
                                    source={
                                      eye
                                        ? Image_Path.Close_Eye
                                        : Image_Path.Open_Eye
                                    }
                                  />
                                </TouchableOpacity>
                              </>
                            );
                          }}
                        />
                      }
                    />
                    <HelperText
                      style={Style.error_txt}
                      type="error"
                      visible={errorpassword}>
                      {errorpassword}
                    </HelperText>
                    {/* <TextInput
                      placeholder="Change password"
                      style={[styles.txt_input, {width: '92%'}]}
                      placeholderTextColor="#D8D8D8"
                      secureTextEntry={eye ? true : false}
                      onChangeText={txt => {
                        setPassword(txt), Password_validation(txt);
                      }}
                    /> */}
                    {/* <TouchableOpacity
                      style={{
                        height: 40,
                        width: 30,
                        // backgroundColor: 'green',
                      }}
                      onPress={() => {
                        eye ? setEye(false) : setEye(true);
                      }}>
                      <Image
                        style={[{marginTop: 10}, Style.img_icon]}
                        source={
                          eye ? Image_Path.Close_Eye : Image_Path.Open_Eye
                        }
                      />
                    </TouchableOpacity> */}
                  </View>
                  {/* </View> */}
                  {/* {errorpassword != null ? (
                    <View style={Style.error_View}>
                      <Text style={Style.error_txt}>{errorpassword}</Text>
                    </View>
                  ) : null} */}

                  <View style={styles.feild_view}>
                    {/* <Image
                    source={Image_Path.Reset_Lock}
                    style={Style.img_icon}
                  /> */}

                    <View
                      // style={[
                      //   // Style.txtfeild,
                      //   styles.feild_view,
                      //   {
                      //     flexDirection: 'row',
                      //     justifyContent: 'space-between',
                      //     borderBottomColor: '#babdc2',
                      //   },
                      // ]}
                      >
                      <TextInput
                        type="flat"
                        underlineColor="#1D2226"
                        activeUnderlineColor={'#CC0022'}
                        label="Confirm password"
                        value={confirm_Password}
                        secureTextEntry={eye2 ? true : false}
                        onChangeText={txt => {
                          setConfirm_Password(txt), valid_confirm(txt);
                        }}
                        style={{
                          backgroundColor: 'white',
                          width: width * 0.78,
                          fontFamily: 'GothicA1-Regular',
                          fontSize: 14,
                        }}
                        right={
                          <TextInput.Icon
                            icon={() => {
                              return (
                                <>
                                  <TouchableOpacity
                                    onPress={() => {
                                      console.log('eye', eye);
                                      eye2 ? setEye2(false) : setEye2(true);
                                    }}>
                                    <Image
                                      style={{
                                        height: 11.28,
                                        width: 17.54,
                                        tintColor: '#CC0022',
                                      }}
                                      source={
                                        eye2
                                          ? Image_Path.Close_Eye
                                          : Image_Path.Open_Eye
                                      }
                                    />
                                  </TouchableOpacity>
                                </>
                              );
                            }}
                          />
                        }
                      />
                      <HelperText
                      style={Style.error_txt}
                      type="error"
                      visible={errorconfirm_Password}>
                      {errorconfirm_Password}
                    </HelperText>
                      {/* <TextInput
                      placeholder="Confirm password"
                      style={[styles.txt_input, {width: '92%'}]}
                      placeholderTextColor="#D8D8D8"
                      secureTextEntry={eye ? true : false}
                      onChangeText={txt => {
                        setConfirm_Password(txt), valid_confirm(txt);
                      }}
                    /> */}
                      {/* <TouchableOpacity
                        style={{
                          height: 40,
                          width: 30,
                          // backgroundColor: 'green',
                        }}
                        onPress={() => {
                          eye2 ? setEye2(false) : setEye2(true);
                        }}>
                        <Image
                          style={[{marginTop: 10}, Style.img_icon]}
                          source={
                            eye2 ? Image_Path.Close_Eye : Image_Path.Open_Eye
                          }
                        />
                      </TouchableOpacity> */}
                    </View>
                  </View>
                  {/* {errorconfirm_Password != null ? (
                    <View style={Style.error_View}>
                      <Text style={Style.error_txt}>
                        {errorconfirm_Password}
                      </Text>
                    </View>
                  ) : null} */}
                  {/* </View> */}

                  <TouchableOpacity
                    style={{
                      backgroundColor: '#CC0022',
                      height: 44,
                      borderRadius: 100,
                      justifyContent: 'center',
                      width: 226,
                      elevation: 2,
                      alignSelf: 'center',
                      marginTop: 26,
                    }}
                    onPress={() => Continue_btn()}>
                    <Text style={Style.button_text}>Change Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
          {/* =========== Activity indicator Modal ========== */}
          {indicator === true ? (
            <Modal animationType="slide" transparent={true} visible={indicator}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#00000090',
                  paddingHorizontal: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 50,
                    width: '100%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      color: '#136e03',
                      fontSize: 18,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    `${error}....`
                  </Text>
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

export default Reset_password_Screen;

const styles = StyleSheet.create({
  txt: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
  },
  change_txt: {
    color: '#3D3D3D',
    fontSize: 18,
    fontFamily: 'GothicA1-SemiBold',
    // lineHeight: 100,
    marginTop: 20,
  },
  change_txt2: {
    color: 'rgba(61, 61, 61, 0.8)',
    fontSize: 14,
    fontFamily: 'GothicA1-Regular',
    // lineHeight: 20,
    marginTop: 20,
  },
  txt_input: {
    color: '#D8D8D8',
    fontSize: 16,
    fontFamily: 'GothicA1-Regular',
  },

  feild_view: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:"transparent",
    marginTop: 10,
  },
});
