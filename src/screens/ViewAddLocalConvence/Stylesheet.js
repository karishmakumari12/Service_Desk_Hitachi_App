import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
console.log('==>', height * 0.049);
const Stylesheet = StyleSheet.create({
  main: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 9,
    // elevation: 3,
    flex: 1,
    padding: 9,
  },
  topView: {
    backgroundColor: '#FAFAFA',
    height: height * 0.049,
    borderRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Viewflat: {
    backgroundColor: '#fff',
    marginRight: 11,
    height: 54,
    width: 92,
    borderRadius: 5,
    borderColor: '#CA092963',
    borderWidth: 1,
    padding: 7,
  },
  cardtxt: {color: '#CA0929', fontSize: 13},
  direction: {flexDirection: 'row', justifyContent: 'space-between'},
  detailsView: {
    height: 102,
    // elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginVertical: 22,
    borderWidth:1,
    borderColor:"#F2F2F2"
  },
});
export default Stylesheet;
