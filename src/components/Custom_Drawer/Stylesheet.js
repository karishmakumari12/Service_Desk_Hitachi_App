import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

export default Stylesheet = StyleSheet.create({
  main: {
    backgroundColor:"black",
    padding: 10,
    width: width * 0.68,
    height: width * 0.23,
    borderRadius: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  txt: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'GothicA1-Bold',
    // marginVertical: 15,
    marginTop: 8,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 100,
    // backgroundColor:"green"
  },
  divided_line: {
    backgroundColor: '#D4D4D4',
    height: 1,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  imgStyle: {
    height: 22,
    width: 22,
  },
  modal_Content: {
    height: 114,
    borderRadius: 9,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  modal_txt: {color: '#000000', fontSize: 14, alignSelf: 'center'},
  modal_view: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    height: 42,
    justifyContent: 'center',
  },
});
// export default Stylesheet;
