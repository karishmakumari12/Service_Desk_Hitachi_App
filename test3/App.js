import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Stack2 from './src/Screens/Stack2/Stack2';
// import Home from './src/Screens/Home/Home';
import Login from './src/Screens/Login/Login';
// import Dashboard from './src/Screens/Dashboard/Dashboard';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();
// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerShown: true,

//         drawerActiveBackgroundColor: 'red',
//         drawerActiveTintColor: 'white',
//         drawerInactiveTintColor: 'black',
//       }}>
//       <Drawer.Screen name="Dashboard" component={Dashboard} />
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Stack2"
          component={Stack2}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
