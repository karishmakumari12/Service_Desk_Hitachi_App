import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from './style';

const ActivityScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"red",justifyContent:"center"}}>
      <Text style={{alignSelf:'center',fontSize:30,fontWeight:"700"}}>ActivityScreen</Text>
    </View>
  )
}

export default ActivityScreen;

// const styles = StyleSheet.create({})