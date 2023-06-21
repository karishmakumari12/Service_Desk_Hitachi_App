import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#C4C4C429',
    padding: 19,
  },
  btnView: {
    width: 123,
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'GothicA1-Medium',
  },
  txtInput: {
    height: 45,
    color: '#ACACAC',
    fontSize: 14,
    marginVertical: 10,
    fontFamily: 'GothicA1-Medium',
  },
});
export default Stylesheet;
