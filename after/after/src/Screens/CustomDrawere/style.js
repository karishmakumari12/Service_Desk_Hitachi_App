import {StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// console.log('---->', width);
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#032046',
    paddingHorizontal:30,
    
  },
  logoImg:{
    height:50,
    width:190,
    // backgroundColor:"red"

  },
  cross:{
    height:20,
    width:20,
    // backgroundColor:"red",
    marginTop:10

  },
  homeImg:{
    height:40,
    width:40,
    alignSelf:'center'
  },
  homeTxt:{
    color:"white",
    alignSelf:"center",
    fontSize:14,
    marginStart:20

  },
});
export default style;
