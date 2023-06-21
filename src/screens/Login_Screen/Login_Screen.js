import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import Image_Path from '../../constants/Image_Path/Image_Path';
import navigationStrings from '../../constants/navigationStrings';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import Custom_netcheck from '../../components/Custom_netcheck/Custom_netcheck';
import Style from '../../Style';
import {styles} from './stylesLogin';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setEmployeeId, setLoader} from '../../redux/actions';
import AppLoader from '../../constants/AppLoader';
import {httpLoginRequest} from './httpLoginRequest';
import {Set_Item, Get_Item} from '../../components/GlobalStorage/Custom_Store';

const {height, width} = Dimensions.get('screen');

const Login_Screen = props => {
  //=========== initialization of all =========
  const [empid, setEmpId] = useState('');
  const [errorempid, setErrorEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [errorpassword, setErrorPassword] = useState('');
  const [eye, setEye] = useState(true);
  const [check_net, setCheck_Net] = useState(true);

  const {isSignIn, deviceName, UniqueId, dynamicUrl, loader} = useSelector(
    state => state.userReducer,
  );

  const dispatch = useDispatch();

  // ============= Regex of all ============
  var empid_regex = /^[0-9a-zA-Z]+$/;
  var Password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  // ============ User validation ============
  const empid_validation = id => {
    if (id === '') {
      setErrorEmpId('Field cannot be left empty');
    } else if (!empid_regex.test(id)) {
      setErrorEmpId('Special Characters are not allowed');
    } else {
      setErrorEmpId(null);
    }
  };

  // ============= password  validation =============
  const Password_validation = password => {
    if (password === '') {
      setErrorPassword('Field cannot be left empty');
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

  //  ========== validation =============
  const validation = () => {
    let flag = true;
    if (empid === '') {
      setErrorEmpId('please enter employee id');
      // flag = false;
    } else if (password === '') {
      setErrorPassword('please enter password');
      // flag = false;
    } else {
      onSubmit();
    }
    // return flag;
  };

  const onSubmit = () => {
      // console.log('onsubmit passed', errorpassword, errorempid);
    dispatch(setLoader(true));
    // if (errorpassword && errorempid) {
      // console.log('onsubmit passed');
      httpLoginRequest(res => {
        console.log('rrrrrrrrrr', res.Response);
        if (res.Status_Code === 200) {
          dispatch(setLoader(false));
          dispatch(setSignIn(true));

          setEye(true);
          Set_Item('userDetails', res.Response);
        }
        dispatch(setLoader(false));
      });

      // login_api();
    // } else {
      // setIndicator(false);
      // dispatch(setLoader(false));
    // }
  };

  // ======= CREATE FUNCTION ======
  const Check_internet = () => {
    NetInfo.fetch().then(state => {
      setCheck_Net(state.isConnected);
    });
  };

  useEffect(() => {
    Check_internet();
  });

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        {/* <StatusBar
         barStyle = "dark-content" 
         hidden = {false} 
         backgroundColor = "#00BCD4" 
         translucent = {true}
        //  backgroundColor="white"
         /> */}

        <ImageBackground
          style={{
            flex: 1,
          }}
          resizeMode={'cover'}
          source={Image_Path.Background}>
          {check_net === true ? (
            <Toast />
          ) : (
            <Custom_netcheck check_net={check_net} />
          )}
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                backgroundColor: 'transparent',
                alignSelf: 'center',
                height: width * 0.21,
                width: width * 0.72,
                resizeMode: 'contain',
              }}
              source={Image_Path.Hitachi_Logo2}
            />

            <View style={styles.vw3}>
              <View style={styles.vw1}>
                <Text style={[styles.line1, {fontFamily: 'GothicA1-Bold'}]}>
                  Welcome
                </Text>
                <Text style={styles.to}>Please Sign in to your account </Text>
              </View>

              {/* =========== Username text field ================ */}

              <View style={styles.space}>
                <View
                  style={[
                    Style.txtfeild,
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // borderBottomColor: errorempid ? 'red' : '#babdc2',
                    },
                  ]}>
                  <View>
                    <TextInput
                      type="flat"
                      underlineColor="#1D2226"
                      activeUnderlineColor={'#CC0022'}
                      label="Employee Id"
                      placeholder="Employee Id"
                      placeholderTextColor="#babdc2"
                      value={empid}
                      onChangeText={txt => {
                        setEmpId(txt), empid_validation(txt);
                      }}
                      style={{
                        backgroundColor: 'white',
                        width: width * 0.78,
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 14,
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => {
                            return (
                              <>
                                <Image
                                  style={{
                                    width: 17,
                                    height: 17,
                                    tintColor: '#CC0022',
                                  }}
                                  // style={[{marginTop: 20}, Style.img_icon]}
                                  source={Image_Path.User_Icon}
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
                      visible={errorempid}>
                      {errorempid}
                    </HelperText>
                  </View>
                </View>
              </View>

              {/* ================= Password Text field ================= */}

              <View style={styles.space}>
                <View
                  style={[
                    Style.txtfeild,
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // borderBottomColor: errorpassword ? 'red' : '#babdc2'
                    },
                  ]}>
                  <View>
                    <TextInput
                      type="flat"
                      underlineColor="#1D2226"
                      activeUnderlineColor={'#CC0022'}
                      label="Password"
                      placeholderTextColor="#babdc2"
                      value={password}
                      onChangeText={txt => {
                        setPassword(txt), Password_validation(txt);
                      }}
                      placeholder="Password"
                      secureTextEntry={eye ? true : false}
                      style={{
                        backgroundColor: 'white',
                        width: width * 0.78,
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 14,
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => {
                            return (
                              <>
                                <TouchableOpacity
                                  onPress={() => {
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
                  </View>
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    // marginVertical: 25,
                    alignItems: 'flex-end',
                    width: '100%',
                  }}>
                  <TouchableOpacity
                    style={{
                      //  backgroundColor: 'red',
                      // marginVertical: 25,
                      alignItems: 'flex-end',
                      // width: '100%',
                    }}
                    onPress={() =>
                      props.navigation.navigate(
                        navigationStrings.ForgetPassword,
                      )
                    }>
                    <Text
                      style={{
                        color: '#CC0022',
                        fontSize: 13,
                        fontFamily: 'Montserrat-Regular',
                      }}>
                      Forget Password ?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={Style.button_style}
                onPress={() => validation()}>
                <Text style={Style.button_text}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>

      {loader ? <AppLoader /> : null}
    </>
  );
};

export default Login_Screen;

// const login_api = async () => {
//   setLoader(true);
//   try {
//     await axios({
//       method: 'post',
//       url: apiConfig.login,
//       data: {
//         emp_id: empid,
//         password: password,
//       },
//       headers: {'content-type': 'application/json'},
//     })
//       .then(res => {
//         // console.log('response', res.data.user);

//         if (res?.status === 200) {
//           if (res?.data?.status === 200) {
//             AsyncStorage.setItem('username', res.data.user.name);
//             // AsyncStorage.setItem('id', empid);
//             // AsyncStorage.setItem('password', password);
//             AsyncStorage.setItem('token', res.data.user.token);
//             AsyncStorage.setItem('employeeId', res.data.user.emp_id);
//             AsyncStorage.setItem('empMail', res.data.user.email);
//             AsyncStorage.setItem('location', res.data.user.location);
//             AsyncStorage.setItem('department', res.data.user.department);
//             // setIndicator(false);
//             setEye(true);
//             setLoader(false);
//             dispatch(setSignIn(true));
//             dispatch(setEmployeeId(res.data.user.emp_id));
//             // props.navigation.navigate(navigationStrings.Showdata);
//           } else if (res?.data?.status === 401) {
//             setLoader(false);
//             // setIndicator(false);
//             error_fun();
//           }
//         }
//         // setIndicator(false);
//         setLoader(false);
//       })
//       .catch(err => {
//         // setIndicator(false);
//         setLoader(false);

//         error_fun1();
//         // console.log("===ERror",err)
//       });
//   } catch (error) {
//     console.log(error);
//     setLoader(false);
//   }
// };
