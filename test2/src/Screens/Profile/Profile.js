import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{flex:1,backgroundColor:"red",justifyContent:"center"}}>
      <Text style={{alignSelf:'center',fontSize:25,fontWeight:'800', fontFamily: 'NotoSansTC-Black',}}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})