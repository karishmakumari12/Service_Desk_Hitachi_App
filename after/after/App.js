import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SignUp from './src/Screens/SignUp/SignUp';
import Login from './src/Screens/Login/Login';
import Home from './src/Screens/Home/Home';
import First from './src/Screens/First/First';
import CustomDrawere from './src/Screens/CustomDrawere/CustomDrawere';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import UserScreen from './src/Screens/UserScreen/UserScreen';
import EmailScreen from './src/Screens/EmailScreen/EmailScreen';
import ActivityScreen from './src/Screens/ActivityScreen/ActivityScreen';
import Second from './src/Screens/Second/Second';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import Language from './src/Screens/Language/Language';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import style from './src/Screens/Dashboard/style';
import CompanyPolicy from './src/Screens/CompanyPolicy/CompanyPolicy';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from './src/Screens/Setting/Setting';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // initialRouteName='UserScreen'
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // backgroundColor: 'yellow',
          height: 70,
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
        },
      }}>
      <Tab.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{
          tabBarActiveTintColor: 'black',
          title: 'Home',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              // <TouchableOpacity
              //   onPress={() => {
              //     submit();
              //   }}>
              //   <Image
              //     style={[style.checkIn, {tintColor: focused ? "green" : 'red'}]}
              //     source={require('./src/assets/images/home.png')}
              //   />
              // </TouchableOpacity>
              <View
                style={{
                  backgroundColor: focused ? 'green' : 'red',
                }}>
                <Image
                  style={[style.checkIn]}
                  source={require('./src/assets/images/home.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          title: 'Activity',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? 'green' : 'red',
                }}>
                <Image
                  style={style.checkOut}
                  source={require('./src/assets/images/activity.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="EmailScreen"
        component={EmailScreen}
        options={{
          headerShown: false,
          title: 'email',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? 'green' : 'red',
                }}>
                <Image
                  style={style.workingHrs}
                  source={require('./src/assets/images/email2.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: 'user',
          tabBarLabelStyle: {
            color: 'black',
            fontSize: 12,
          },

          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? 'green' : 'red',
                }}>
                <Image
                  style={style.workingHrs}
                  source={require('./src/assets/images/profile1.png')}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      // initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: 'white',
      }}
      drawerContent={props => {
        return <CustomDrawere {...props} />;
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: () => {
            return (
              <Image
                style={{backgroundColor: 'white', height: 20, width: 20}}
                source={require('./src/assets/images/home.png')}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => {
            return (
              <Image
                style={{height: 40, width: 40}}
                source={require('./src/assets/images/home.png')}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="CompanyPolicy"
        component={CompanyPolicy}
        options={{
          drawerIcon: () => {
            return (
              <Image
                style={{backgroundColor: 'white', height: 20, width: 20}}
                source={require('./src/assets/images/home.png')}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: () => {
            return (
              <Image
                style={style.homeImg}
                source={require('./src/assets/images/setting.png')}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen
          name="First"
          component={First}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="CustomDrawere"
          component={CustomDrawere}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Second"
          component={Second}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        {/* 
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
