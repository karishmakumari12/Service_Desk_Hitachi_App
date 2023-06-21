import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/navigations/Routes';
import MainRoutes from './src/navigations/MainRoutes';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
const App = () => {
  // console.log("App")
  return (
    <>
      <Provider store={Store}>
        <MainRoutes />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
