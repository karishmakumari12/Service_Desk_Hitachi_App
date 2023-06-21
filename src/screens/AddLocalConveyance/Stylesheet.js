import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 9,
    elevation: 3,
    padding: 20,
  },
  hline: {
    backgroundColor: '#707070',
    height: 1,
    flex: 1,
    marginLeft: 10,
  },
  line: {flexDirection: 'row', justifyContent: 'space-between'},
  line2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnview: {
    width: width * 0.365,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btntxt: {fontSize: 16, color: '#FFFFFF'},
  txt_input: {height: 45, fontSize: 14, marginVertical: 17},
});
export default Stylesheet;
