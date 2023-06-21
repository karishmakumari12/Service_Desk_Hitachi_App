import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
console.log('=>', width);
const Stylesheet = StyleSheet.create({
  flex_style: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  topContainer: {
    height: height * 0.134,
    width: width * 1,
    // backgroundColor: 'red',
    backgroundColor: '#F1F1F1',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  icon_view: {
    // backgroundColor: 'white',
    // height: 50,
    // width: 50,
    // borderRadius: 8,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10

  },
  radius: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  searchView: {
    // marginTop: 20,
    // marginHorizontal: 20,
    flexGrow: 1,
    borderRadius: 32,
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,

  },
  searchtxt: {
    fontSize: 14,
    backgroundColor: 'transparent',
    width: 290
  },
  cardView: {
    // marginVertical: 30,
    // marginHorizontal: 20,
    padding: 15,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardStyle: {
    height: height * 0.106,
    // height: 91,
    width: width * 0.28,
    borderRadius: 11,
    padding: 11,
    // backgroundColor: 'green',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  todayView: {
    marginHorizontal: 20,
    borderRadius: 5,
    borderColor: '#F2F2F2FA',
    borderWidth: 1,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    // backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 2,
    marginTop: 10

  },
  icon_Text: {
    height: 25,
    width: 24,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status_txt: {
    fontSize: 11,
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  card_img: {
    marginTop:  (height * 0.106 - height * 0.106 ) - 11,
    // marginLeft: -5,
    height: 20,
    width: 30,
    // backgroundColor: 'blue'
  },
});
export default Stylesheet;
