import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Stylesheet from './Stylesheet';
import Image_Path from '../../constants/Image_Path/Image_Path';

const Custom_Header = props => {
  // console.log(props, '==>');
  return (
    <View style={Stylesheet.main_container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={Image_Path.backarrow} style={{height: 16, width: 20}} />
      </TouchableOpacity>
      <Text style={Stylesheet.txt_style}>{props.label}</Text>
    </View>
  );
};

export default Custom_Header;

const styles = StyleSheet.create({});
