import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 9,
  },
  txt: {
    lineHeight: 28,
    fontSize: 12,
    color: '#676767',
    fontFamily: 'GothicA1-Regular',
  },
});
export default Stylesheet;
