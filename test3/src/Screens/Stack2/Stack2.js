import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';
import Stack3 from '../Stack3/Stack3';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Stack2 = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
      }}>
      <Drawer.Screen name="Stack3" component={Stack3} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Stack2;

const styles = StyleSheet.create({});
