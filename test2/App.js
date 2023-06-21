import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from './src/Screens/Profile/Profile';
import Home from './src/Screens/Home/Home';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import DrawerHomeScreen from './src/Screens/DrawerHomeScreen/DrawerHomeScreen';
import DrawerProfileScreen from './src/Screens/DrawerProfileScreen/DrawerProfileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
// import font from './src/assets/fonts'
// import { Screen } from 'react-native-screens';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // initialRouteName='UserScreen'
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'blue',
          // height: 60,
          borderTopStartRadius: 150,
          // borderTopLeftRadius: 150,
          borderTopRightRadius: 150,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: 'black',
          title: 'Home',
          // tabBarStyle: {height: 160},
          tabBarLabelStyle: {
            color: 'black',
            // padding: 10,
            // fontSize: 12,
            fontFamily: 'NotoSansTC-Black',
            // backgroundColor:'red'
          },

          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Icon name="home" size={15} color="#900" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          // tabBarStyle: {height: 160},
          tabBarLabelStyle: {
            color: 'black',
            fontFamily: 'NotoSansTC-Black',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <Icon name="users" size={15} color="#900" />;
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
      screenOptions={{
        headerShown: true,
        // headerStatusBarHeight: 70,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        headerStyle: {
          backgroundColor: 'pink',
          borderBottomStartRadius: 20,
          borderBottomEndRadius: 20,
          // alignSelf:'center'
          // alignItems: 'center',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          color: 'yellow',
          fontFamily: 'NotoSansTC-Black',
        },

        headerRight: () => (
          <Icon name="home" size={30} color="#900" style={{marginRight: 20}} />
        ),
      }}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen
        name="DrawerProfileScreen"
        component={DrawerProfileScreen}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
