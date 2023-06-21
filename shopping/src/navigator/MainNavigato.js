import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from '../screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from '../screens/Product';
import ProductDeatals from '../screens/ProductDeatals';
const Stack = createStackNavigator();
const MainNavigato = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDeatals" component={ProductDeatals}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigato;

const styles = StyleSheet.create({});
