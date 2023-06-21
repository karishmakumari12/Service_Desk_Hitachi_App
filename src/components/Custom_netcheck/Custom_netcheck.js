import { StyleSheet, Text, View,Modal,Dimensions } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get('screen');
const Custom_netcheck = (props) => {
    // console.log("========N",props.check_net);
  return (
    <Modal 
    animationType="fade" 
    transparent={true} 
    visible={!props.check_net}>
        <View style={styles.main}>
            <Text
            style={{backgroundColor:'#04aeba',
            color:"white",
            fontSize:20,
            fontWeight:"800",
            textAlign:"center",
            height:height*0.09,
            paddingTop:height*0.05,
    }}>
                Please check internet connnect</Text>
        </View>
     </Modal>
  )
}

export default Custom_netcheck

const styles = StyleSheet.create({
    main:{
        // backgroundColor:"red",
        flex:1,
    }
})