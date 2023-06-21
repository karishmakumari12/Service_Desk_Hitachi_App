import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:"green",justifyContent:"center"}}>
      <Text style={{alignSelf:'center',fontSize:25,fontWeight:'800', fontFamily: 'NotoSansTC-Black',}}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})