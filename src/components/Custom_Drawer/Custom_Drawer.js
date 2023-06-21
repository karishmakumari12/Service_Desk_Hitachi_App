import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Image_Path from '../../constants/Image_Path/Image_Path';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn} from '../../redux/actions';

// import Stylesheet from './Stylesheet';
import Stylesheet from './Stylesheet';
function Custom_Drawer(props) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const {userName, EmpId} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');
  const [display, setDisplay] = useState(false);
  const [colors, setColors] = useState(false);
  const {state, descriptors, navigation} = props;
  let lastGroupName = '';
  let newGroup = true;
  // console.log('-->', props);
  // ======== REMOVE DATA ===========
  const Logout_fun = () => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('userDetails');

    console.log('==>log');

    setVisible(false);

    dispatch(setSignIn(false));
  };
  const remove_data = () => {
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('id');
    AsyncStorage.removeItem('password');
  };
  // ==== fatch data=====
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // console.log("======value ===",value);
        setName(JSON.parse(value).name);
      }
    } catch (error) {}
  };
  useEffect(() => {
    _retrieveData();
  }, []);

  const Drawer_Item = (props) => {
    return (
      <DrawerItem
        style={{borderRadius: 0}}
        {...props}
        inactiveBackgroundColor="#fff"
        activeBackgroundColor="#CC0022"
        inactiveTintColor="#000"
        activeTintColor="#fff"
        labelStyle={{
          fontSize: 12,
          fontFamily: 'GothicA1-Regular',
          marginLeft: -20,
        }}
        pressOpacity={1}
      />
    );
  };

  const customSelect = groupName => {
    if (selected === '') {
      setDisplay(true);
      setColors(true);
      setSelected(groupName);
    } else if (selected === groupName) {
      setDisplay(false);
      setSelected('');
    } else {
      setDisplay(true);
      setSelected(groupName);
      setColors(true);
    }
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        // justifyContent: 'space-between',
        flex: 1,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View style={Stylesheet.main}>
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItem: 'center',
            }}>
            <Image style={Stylesheet.img} source={Image_Path.User_Picture} />
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              padding: 5,
              flex: 1,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'GothicA1-Bold',
                // marginVertical: 15,
                marginTop: 8,
                marginLeft: 10,
              }}>
              {userName}
            </Text>
            <Text
              style={{
                color: '#8D9092',
                fontSize: 12,
                fontFamily: 'GothicA1-Bold',
                // marginVertical: 15,
                marginTop: 8,
                marginLeft: 10,
              }}>
              {EmpId}
            </Text>
          </View>
        </View>
        {/* <DrawerItemList {...props} /> */}
        <View style={{flex: 1}}>
          {state.routes.map((route, index) => {
            // console.log("index", index);
            const {drawerLabel, groupName, drawerIcon} =
              descriptors[route.key].options;
            if (lastGroupName !== groupName) {
              newGroup = true;
              lastGroupName = groupName;
            } else newGroup = false;
            return (
              <>
                {newGroup & (groupName === 'Local Conveyance') ? (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                      justifyContent: 'space-between',
                      backgroundColor: display & colors ? '#CC0022' : '#fff',
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      const group = groupName;
                      customSelect(group);
                    }}>
                    <Image
                      source={Image_Path.LocalConveyance}
                      style={[
                        Stylesheet.imgStyle,
                        {tintColor: display & colors ? '#fff' : '#000'},
                      ]}
                      resizeMode="contain"
                    />
                    <Text
                      key={groupName}
                      style={{
                        fontSize: 12,
                        fontFamily: 'GothicA1-Regular',
                        color: display & colors ? '#fff' : '#000',
                        flex: 1,
                        marginLeft: 10,
                      }}>
                      {groupName}
                    </Text>
                    <Image
                      source={
                        display ? Image_Path.uparrow : Image_Path.downarrow
                      }
                      style={{height: 15, width: 15}}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ) : null}
                {groupName === '1' ? (
                  <Drawer_Item
                    key={index}
                    label={drawerLabel}
                    icon={drawerIcon}
                    onPress={() => {
                      setDisplay(false);
                      props.navigation.navigate(route.name);
                    }}
                    focused={
                      state.routes.findIndex(e => e.name === route.name) ===
                      state.index
                    }
                  />
                ) : null}
                {display & (selected === groupName) ? (
                  <Drawer_Item
                    key={index}
                    label={drawerLabel}
                    icon={drawerIcon}
                    onPress={() => {
                      setColors(false);
                      props.navigation.navigate(route.name);
                    }}
                    style={{marginLeft: 50, borderRadius: 0}}
                    focused={
                      state.routes.findIndex(e => e.name === route.name) ===
                      state.index
                    }
                  />
                ) : null}
              </>
            );
          })}
        </View>
      </View>
      <View>
        <View style={Stylesheet.divided_line} />
        <DrawerItem
          label="Privacy Policy"
          icon={({focused}) => (
            <Image
              source={Image_Path.privacy}
              resizeMode="contain"
              style={Stylesheet.imgStyle}
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          )}
          style={{borderRadius: 0}}
          inactiveBackgroundColor="#ffffff"
          activeBackgroundColor="#CC0022"
          inactiveTintColor="#000000"
          activeTintColor="#ffffff"
          labelStyle={{
            fontSize: 12,
            fontFamily: 'GothicA1-Regular',
            marginLeft: -10,
          }}
          onPress={() => props.navigation.navigate('Privacy_policy')}
        />
        {/* <DrawerItem
          label="Terms & Conditions"
          labelStyle={{
            fontSize: 12,
            fontFamily: 'GothicA1-Regular',
            marginLeft: -10,
          }}
          icon={({focused}) => (
            <Image
              source={Image_Path.t_and_c}
              resizeMode="contain"
              style={{height: 20, width: 20}}
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          )}
          inactiveBackgroundColor="#ffffff"
          activeBackgroundColor="#CC0022"
          inactiveTintColor="#000000"
          activeTintColor="#ffffff"
          onPress={() => props.navigation.navigate('Terms_Condition')}
        /> */}
        <DrawerItem
          labelStyle={{
            fontSize: 12,
            fontFamily: 'GothicA1-Regular',
            marginLeft: -10,
          }}
          label="Logout"
          icon={({focused}) => (
            <Image
              source={Image_Path.Shutdown_Icon}
              resizeMode="contain"
              style={Stylesheet.imgStyle}
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          )}
          inactiveBackgroundColor="#ffffff"
          activeBackgroundColor="#CC0022"
          inactiveTintColor="#000000"
          activeTintColor="#ffffff"
          onPress={() => setVisible(true)}
        />
      </View>
      <Modal
        isVisible={visible}
        backdropOpacity={0.5}
        backdropColor="#000000"
        onBackdropPress={() => setVisible(false)}>
        <View style={Stylesheet.modal_Content}>
          <Text
            style={{
              marginTop: 24,

              marginStart: 15,

              color: '#383838',

              fontSize: 18,
            }}>
            Do you really want to exit :
          </Text>

          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={[Stylesheet.modal_view, {borderBottomLeftRadius: 9}]}
              onPress={() => Logout_fun()}>
              <Text style={Stylesheet.modal_txt}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Stylesheet.modal_view, {borderBottomRightRadius: 9}]}
              onPress={() => setVisible(false)}>
              <Text style={Stylesheet.modal_txt}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </DrawerContentScrollView>
  );
}
export default Custom_Drawer;
