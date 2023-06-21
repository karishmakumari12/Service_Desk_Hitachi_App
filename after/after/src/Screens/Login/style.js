import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// console.log('---->', width);
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
   
  },
  backgraounArrow: {
    // height: height / 2,
    // width: width / 2,
    height: 100,
    width: 100,
 
  },
  loginTxt: {
    color: '#136292',
    fontSize: 31,
    marginTop:20,
    marginRight:20,
    fontWeight: '700',
  },
  loginIcon: {
    height: 240,
    width: 200,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignSelf: 'center',
  },
 nameField: {
    height: 55,
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    borderRadius: 15,
    marginHorizontal: 40,
  },
  inputField: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop:20,
    backgroundColor:'#00000000',
    borderRadius: 15,
    marginHorizontal: 40,
  },
  button1: {
    height: 55,
   justifyContent:'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    borderRadius: 15,
    marginTop:20,
    backgroundColor:'#135c89',
    marginHorizontal: 40,
    marginBottom:20
  },
btnTxt:{
  fontSize:18,
  fontWeight:"700",
  color:'white'

},
account:{
    color:'#136292',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize:15,

},
  emailImg: {
    height: 20,
    width: 20,
  },
  leftIcon:{
    height:60,
    width:60,

  },
  rightIcon:{
    height:60,
    width:60,

  },
  pageStyle: {
    height: height,
  },
  logoImage: {
    alignSelf: 'center',
    height: 100,
    width: 300,
    marginTop: height / 10,
  },

});
export default style;
