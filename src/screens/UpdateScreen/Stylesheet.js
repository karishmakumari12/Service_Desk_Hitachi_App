import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: '#F8F8F8',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  style_Container: {

    backgroundColor: '#ffffff',
    // backgroundColor: 'red',
    // marginHorizontal: 20,
    // marginBottom: 20,
    borderRadius: 10,
    // elevation: 2,
    padding: 15,
    // marginTop: 20,
    elevation: 2,
  },
  txtFeild_Style: {
    // marginVertical: 10,
    // borderRadius: 10,
    // borderColor: 'green',
    marginTop: 20,
    fontFamily: 'GothicA1-Regular'
  },
  button_Container: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    // backgroundColor:'green'
  },
  btn_view: {
    height: 38,
    width: 156,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_txt: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'GothicA1-SemiBold'
  },
});
export default Stylesheet;
