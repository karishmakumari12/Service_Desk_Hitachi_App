import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
// console.log('---->', width);
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: height / 6.1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#032046',
  },

  sideBar: {
    // height: height / 25,
    height: 30,
    width:30,


    // width: width / 15,
  },
  dashboard: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  notification: {
    height: 25,
    width:25,
  },
  profile: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  johnTop: {
    marginTop: 70,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heightImg: {
    height: height / 6,
    // height: 120,
    // width: 40,
    marginTop: 10,
    marginLeft: 10,
    // backgroundColor: '#032046',
    borderRadius: 20,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'Black',
  },
  home: {
    height: height / 30,
    // height: 30,
    // width: 30,
    width: width / 15,
    alignSelf: 'center',
  },
  buldingImg: {
    // backgroundColor:"white",
    tintColor: 'white',
    alignSelf: 'center',
    marginBottom: 10,
  },
  emptyHeightImg: {
    height: height / 30,
    width: width / 10,
    // width: 40,
    backgroundColor: 'transparent',
    // borderRadius:20,
    // borderWidth:2,
    // borderColor:"Black"
  },
  johnTxt: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  },
  ux: {
    color: '#808080',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 7,
  },
  time: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
  },
  day: {
    color: '#808080',
    fontSize: 18,
    marginTop: 7,
    alignSelf: 'center',
  },
  circle: {
    // height:height/5,
    height: height / 5.5,

    width: width / 2.5,
    justifyContent: 'center',
    // alignSelf: 'center',
    borderRadius: 100,
    // alignSelf: 'center',
    borderWidth: 7,
    // marginStart:18,

    borderColor: '#b8c3d9',
  },
  circleTime: {
    alignSelf: 'center',
    color: 'black',

    fontSize: 20,
  },
  timer: {
    height: 50,
    width: 50,
    // height: height / 17,
    // backgroundColor:'red',
    // width: width / 7.8,
    // marginRight:10,
  },
  shift: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    marginTop: 10,
  },
  location: {
    height: height / 40,
    // height: 20,
    // width: 20,
    width: width / 20,
    marginRight: 5,
  },
  sweetBall: {
    color: 'black',
  },
  workingHrs: {
    height: 40,
    width: 40,
    // height: height / 20.8,
    // height: 40,
    // width: width / 10.2,
    // backgroundColor:'red',
    // width: 40,
  },
  checkOut: {
    height: 40,
    width: 40,
    // height: height / 18.2,
    // width: width / 8.6,
    // backgroundColor:'red',
  },
  checkIn: {
    height: 40,
    width: 40,
    // height: height / 20.8,
    // width: width /9.8,
    // backgroundColor:'red',
  },
  backgraounArrow: {
    height: 100,
    width: 100,
  },
});
export default style;
