import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Style from '../../Style';
const {height, width} = Dimensions.get('screen');

const Custom_Submit = props => {
  console.log('props', props.ticket_name);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalvisible}>
      <View style={styles.centeredView}>
        <View style={Style.modal_View}>
          <Text
            style={[Style.modal_text,{
              lineHeight: 30,
              textAlign:"center"
            }]}>
            Your ticket has been generated successfully.(SR No.- 
            <Text
            style={{color:"red"}}>{props.ticket_name}</Text>)
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#04aeba',
              height: 40,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:3
            }}
            onPress={props.dismiss}>
            <Text style={{color:"white", fontSize:15,fontWeight:"800"}}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Custom_Submit;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#00000090"
  },
});
