import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main_container: {
    width: width * 1,
    paddingTop: 20,
    paddingHorizontal:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt_style: {fontSize: 18, color: '#000000', marginHorizontal: 15},
});
export default Stylesheet;
