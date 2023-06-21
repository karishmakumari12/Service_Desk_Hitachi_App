import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor:"#F8F8F8"
  },
  searchView: {
    marginHorizontal: 20,
    borderRadius: 32,
    // borderWidth: 1,
    // borderColor: '#DADADA36',
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#ffffff",
    shadowColor:"#DADADA36"
  },
  searchtxt: {
    fontSize: 14,
    // backgroundColor: 'red',
    color:"#868686",
    width: 300
  },
  chipView: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 32,
    backgroundColor:"#ffffff",
    marginStart:20
    
  },
  chipTxt:{
    fontSize:15,
  }
});
export default Stylesheet;
