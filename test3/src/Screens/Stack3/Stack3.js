import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabHome from '../TabHome/TabHome';
import TabUser from '../TabUser/TabUser';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack3 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'pink',
        },
      }}>
      <Tab.Screen name="TabHome" component={TabHome} />
      <Tab.Screen name="TabUser" component={TabUser} />
    </Tab.Navigator>
  );
};

export default Stack3;

const styles = StyleSheet.create({});
