import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Second = ({route}) => {
  const {records} =route.params;
  console.log("rerrererere: ", records)
  return (
    <View>
      <Text style={{alignSelf:'center',marginTop:20,fontSize:20,color:'black'}}>Second:{records.name},{" "},{records.course}</Text>
    </View>
  )
}

export default Second

const styles = StyleSheet.create({

})