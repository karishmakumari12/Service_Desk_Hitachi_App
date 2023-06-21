import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#C4C4C429',
    margin: 18,
    paddingVertical: 9,
  },
  main: {
    height: 129,
    margin: 9,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EEEEEE',
  },
  txt: {
    lineHeight: 28,
    fontSize: 12,
    color: '#676767',
    fontFamily: 'GothicA1-Regular',
  },
  txt_style: {fontFamily: 'GothicA1-SemiBold', color: '#3A3A3A'},
});
export default Stylesheet;
