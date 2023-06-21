import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
import Stylesheet from './Stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoader from '../../constants/AppLoader';
import Image_Path from '../../constants/Image_Path/Image_Path';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSignIn,
  setEmployeeId,
  setEmpMail,
  setEmpLocation,
  setEmpDepartment,
  setUserName,
  setDesignation,
} from '../../redux/actions';
import {Set_Item, Get_Item} from '../../components/GlobalStorage/Custom_Store';

const Profile_Screen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  const [picture, setPicture] = useState('');

  const {userName, EmpId, empMail, empLocation, empDepartment, designation} =
    useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const getData = () => {
    Get_Item('userDetails', res => {
      console.log('Profile', res);
      if (res.email != null) {
        dispatch(setEmpMail(res.email));
      } else {
        dispatch(setEmpMail('Not Available'));
      }
      if (res.location != null) {
        dispatch(setEmpLocation(res.location));
      } else {
        dispatch(setEmpLocation('Not Available'));
      }
      if (res.department != null) {
        dispatch(setEmpDepartment(res.department));
      } else {
        dispatch(setEmpDepartment('Not Available'));
      }
      if (res.name != null) {
        dispatch(setUserName(res.name));
      } else {
        dispatch(setUserName('Not Available'));
      }
      if (res.empid != null) {
        dispatch(setEmployeeId(res.empid));
      } else {
        dispatch(setEmployeeId('Not Available'));
      }
      if (res.designation != null) {
        dispatch(setDesignation(res.designation));
      } else {
        dispatch(setDesignation('Not Available'));
      }
    });
  };

  // ===== camera====
  const Open_Camera = () => {
    // console.log('====>clickoinh');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image.path);
      setPicture(image.path);
    });
  };

  // ====== Custom component for profile details =====
  const Profile_details = item => {
    // console.log('---->', item);
    return (
      <View style={Stylesheet.detail_View}>
        <Text
          style={{
            color: '#223269',
            fontSize: 14,
            fontFamily: 'GothicA1-Bold',
          }}>
          {item.label}
        </Text>
        <Text
          style={{
            color: '#242134',
            fontSize: 14,
            fontFamily: 'GothicA1-Medium',
          }}>
          {item.detail == null
            ? 'Data not available from backend side'
            : item.detail}
        </Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={Stylesheet.main}>
        {/* ====== Header ======== */}
        <View style={Stylesheet.TopHeader}>
          <TouchableOpacity
            // style={Stylesheet.icon_view}
            onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                height: 50,
                width: 50,
                //backgroundColor: 'red',
              }}
              source={Image_Path.Menu_Icon}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#0D0D0D',
              fontSize: 18,
              fontFamily: 'GothicA1-Bold',
            }}>
            My Profile
          </Text>
          <View />
        </View>
        {/* ==== camera card ====== */}
        <View
          style={{
            paddingHorizontal: 20,
            // backgroundColor: 'green',
          }}>
          <View style={Stylesheet.card_View}>
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View style={Stylesheet.profile_View}>
                {picture === '' ? (
                  // <Icon name={'person'} size={46} color={'#0000001C'} />
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      //backgroundColor: 'red',
                    }}
                    source={Image_Path.User_Picture}
                  />
                ) : (
                  <Image
                    style={Stylesheet.profile_View}
                    source={{uri: picture}}
                    resizeMode="contain"
                  />
                )}
              </View>
              {/* <TouchableOpacity
                style={Stylesheet.camera_View}
                onPress={() => Open_Camera()}
                >
                <Icon name="camera" size={15} color={'#FFFFFF'} />
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                // backgroundColor: 'green',
                width: 200,
                height: 100,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#242134',
                  fontSize: 16,
                  fontFamily: 'GothicA1-Bold',
                  marginLeft: 20,
                }}>
                {userName}
              </Text>
              <Text
                style={{
                  color: '#242134',
                  fontSize: 12,
                  fontFamily: 'GothicA1-Medium',
                  marginLeft: 20,
                }}>
                {EmpId}
              </Text>
              <Text
                style={{
                  color: '#242134',
                  fontSize: 12,
                  fontFamily: 'GothicA1-Medium',
                  marginLeft: 20,
                }}>
                {designation}
              </Text>
            </View>
          </View>
        </View>
        {/* ========= Details card ======= */}
        <ScrollView
          contentContainerStyle={{
            padding: 20,
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              // margin: 20,
              flex: 1,
              borderRadius: 10,
              // borderWidth: 1,
              // borderColor: '#C0C0C029',
              // backgroundColor: 'red',
              // elevation: 3,
            }}>
            <Profile_details label={'Email'} detail={empMail} />
            <Profile_details label={'Location'} detail={empLocation} />
            <Profile_details label={'Department'} detail={empDepartment} />
            {/* <Profile_details label={'M1 Name'} detail={'M1 Name'} />
            <Profile_details label={'M1 Email Id'} detail={'M1 Email Id'} />
            <Profile_details label={'M2 Name'} detail={'M2 Name'} />
            <Profile_details label={'M2 Email Id'} detail={'M2 Email Id'} /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
      {loader ? <AppLoader /> : null}
    </>
  );
};

export default Profile_Screen;
