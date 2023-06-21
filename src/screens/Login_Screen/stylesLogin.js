import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  top: {
    height: height * 0.38,
    width: '100%',
    justifyContent: 'center',
  },
  line1: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  vw1: {
    justifyContent: 'space-evenly',
    height: height * 0.09,
    width: '100%',
  },
  wlc: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  to: {
    color: 'rgba(29,34,38,0.6)',
    fontSize: 16,
    fontFamily: 'GothicA1-Medium',
    textAlign: 'center',
  },
  vw2: {
    width: '100%',
    height: height * 0.08,
    justifyContent: 'flex-end',
  },
  space: {
    alignContent: 'center',
  },
  vw3: {
    height: height * 0.512,
    justifyContent: 'space-between',
    width: width * 0.83,
    // marginTop: height * 0.02,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    // marginTop: width * 0.17,
    // elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 40,
  },
  txtfld: {
    fontSize: 16,
    width: '92%',
    color: '#babdc2',
    // paddingBottom: -10,
    fontFamily: 'Montserrat-Regular',
    // backgroundColor: 'blue',
  },
  txtfld1: {
    width: '92%',
    fontSize: 16,
    color: '#babdc2',
    paddingBottom: -10,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: 'white',
  },
});
