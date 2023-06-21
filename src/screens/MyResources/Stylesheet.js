import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {flex: 1},
  topContainer: {
    height: height * 0.134,
    width: width * 1,
    backgroundColor: '#F1F1F1',
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#76767629',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  icon_view: {
    height: height * 0.058,
    width: width * 0.118,
  },
  radius: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  flatlist: {
    height:height*0.129,
    backgroundColor: '#fff',
    borderRadius: 9,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 14,
    borderColor: 'grey',
  },
  txt: {
    color: '#383838',
    lineHeight: 22,
    fontFamily: 'GothicA1-SemiBold',
  },
  size: {
    fontSize: 12,
  },
});
export default Stylesheet;
