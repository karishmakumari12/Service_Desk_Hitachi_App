import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Product');
    }, 3000);
  }, []);
  return (
    <ImageBackground 
    resizeMode="stretch"
    style={{flex:1,justifyContent:"center"}}
    source={require('../assets/images/shopping.jpg')}>
    <View style={{justifyContent:"center"}}>
    <Text style={{color:'red',fontSize:50,marginTop:50,fontWeight:'700',alignSelf:'center'}}>Shopping</Text>
    </View>

    </ImageBackground>
    // '../../assets/images/shopingBag.png'
    // <View>
    //   <Text style={{color:'black',fontSize:50,marginTop:50}}>Splash</Text>
    // </View>
  )
}

export default Splash

const styles = StyleSheet.create({})