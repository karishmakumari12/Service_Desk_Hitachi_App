import {Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash_Screen,
  Login_Screen,
  Showdata_Screen,
  Update_Screen,
  View_Ticket_Screen,
  Close_Screen,
  Profile_Screen,
  Incident_Screen,
  Service_Request,
  ForgetPassword,
  Reset_password_Screen,
  DashBoard,
} from '../screens/index';
import Open_Incident_Screen from '../screens/Open_Incidents_Screen/Open_Incident_Screen';
import Image_Path from '../constants/Image_Path/Image_Path';
import Custom_Drawer from '../components/Custom_Drawer/Custom_Drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import AddLocalConveyance from '../screens/AddLocalConveyance/AddLocalConveyance';
import ClaimLocalConveyance from '../screens/ClaimLocalConveyance/ClaimLocalConveyance';
import SearchEmployee from '../screens/SearchEmployee/SearchEmployee';
import MyResources from '../screens/MyResources/MyResources';
import ViewAddLocalConvence from '../screens/ViewAddLocalConvence/ViewAddLocalConvence';
import ApproveConveyance12 from '../screens/ApproveConveyance12/ApproveConveyance12';
import ApproveConveyance22 from '../screens/ApproveConveyance22/ApproveConveyance22';
import ApproveConveyance32 from '../screens/ApproveConveyance32/ApproveConveyance32';
import ApproveConveyanceCharges from '../screens/ApproveConveyanceCharges/ApproveConveyanceCharges';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//***** DRAWER TAB NAVIGATION *****

const My_Drawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: '#000000',
        drawerActiveBackgroundColor: '#CC0022',
        drawerActiveTintColor: '#FFFFFF',
        drawerStyle: {
          backgroundColor: '#ffffff',

          width: width * 0.73,

          borderBottomRightRadius: 24,

          borderTopRightRadius: 24,

          padding: 0,
        },

        // drawerItemStyle: {
        //   borderRadius: 10,
        // },

        // drawerLabelStyle: {
        //   fontSize: 12,
        //   marginLeft: -10,
        //   fontFamily: 'GothicA1-Regular',
        // },
      }}
      drawerContent={props => <Custom_Drawer {...props} />}
      >
      <Drawer.Screen
        name={'Home'}
        component={DashBoard}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.Home}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'Home',
          groupName: '1',
        }}
      />
      <Drawer.Screen
        name="AddLocalConveyance"
        component={AddLocalConveyance}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.AddLocal}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'Add Local Conveyance',
          groupName: 'Local Conveyance',
        }}
      />

      <Drawer.Screen
        name="ClaimLocalConveyance"
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.Claim}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'Claim Local Conveyance',
          groupName: 'Local Conveyance',
        }}
        component={ClaimLocalConveyance}
      />

      <Drawer.Screen
        name="ApproveConveyanceCharges"
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.Approve}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'Approve Conveyance Charges',
          groupName: 'Local Conveyance',
        }}
        component={ApproveConveyanceCharges}
      />

      <Drawer.Screen
        name={'MyResources'}
        component={MyResources}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.MyResources}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'My Resources',
          groupName: '1',
        }}
      />

      <Drawer.Screen
        name={'SearchEmployee'}
        component={SearchEmployee}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.SearchIcon}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'Search Employee',
          groupName: '1',
        }}
      />
      {/* <Drawer.Screen
        name={'Updated Incidents'}
        component={View_Ticket_Screen}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.Open_Icon}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '@000000'}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name={'ViewIncidents'}
        component={Close_Screen}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={Image_Path.Close_Icon}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'View Ticket',
          groupName: '1',
        }}
      />
      <Drawer.Screen
        name={'MyProfile'}
        component={Profile_Screen}
        options={{
          drawerIcon: ({focused}) => (
            <Image
              source={require('../assets/images/user_icon.png')}
              style={styles.img}
              resizeMode="contain"
              tintColor={focused ? '#ffffff' : '#000000'}
            />
          ),
          drawerLabel: 'My Profile',
          groupName: '1',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 18,
    width: 18,
    tintColor: '#FFFFFF',
  },
});

export const AuthStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName={navigationStrings.SplashScreen}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
      }}
      animation="fade">
      {/* <Stack.Screen
        name={navigationStrings.SplashScreen}
        component={Splash_Screen}
      /> */}
      <Stack.Screen
        name={navigationStrings.LoginScreen}
        component={Login_Screen}
      />
      <Stack.Screen
        name={navigationStrings.ForgetPassword}
        component={ForgetPassword}
      />
      <Stack.Screen
        name={navigationStrings.Reset_password}
        component={Reset_password_Screen}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"My_Drawer"} component={My_Drawer} />
      <Stack.Screen name={navigationStrings.Update} component={Update_Screen} />
      <Stack.Screen
        name={navigationStrings.Incident_Screen}
        component={Incident_Screen}
      />
      <Stack.Screen
        name={navigationStrings.Service_Request}
        component={Service_Request}
      />
      <Stack.Screen
        name={'Open_Incident_Screen'}
        component={Open_Incident_Screen}
      />
      <Stack.Screen
        name={'ViewAddLocalConvence'}
        component={ViewAddLocalConvence}
      />
      <Stack.Screen
        name={'ApproveConveyance12'}
        component={ApproveConveyance12}
      />
      <Stack.Screen
        name={'ApproveConveyance22'}
        component={ApproveConveyance22}
      />
      <Stack.Screen
        name={'ApproveConveyance32'}
        component={ApproveConveyance32}
      />
    </Stack.Navigator>
  );
};
