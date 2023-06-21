import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// console.log('---->', width);
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
  },
  clip: {
    height: 40,
    width:100,
    borderColor: '#b1b1b1',
    borderRadius: 20,
    borderWidth:1,
    justifyContent:'center'
  },
  ProfilePersonImg:{
    height:20,
    width:20,
    marginStart:5,

  },
});
export default style;
