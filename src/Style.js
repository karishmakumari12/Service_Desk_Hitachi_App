import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  button_style: {
    backgroundColor: '#CC0022',
    height: 44,
    borderRadius: 100,
    justifyContent: 'center',
    width: 226,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    // marginTop: 50
  },
  button_text: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'GothicA1-Bold',
  },
  modal_button: {
    height: 45,
    width:160,
    backgroundColor: '#00B4AB',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  img_icon:{
    height:11.28,
    width:17.54,
    tintColor:"#CC0022",
    alignSelf: 'center',
  },
  error_txt:{
    color: 'red',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
  },
  error_View:{
    width: "100%",
    backgroundColor: "transparent",
  },
  modal_text:{
    fontSize:16,
    fontFamily: 'Montserrat-Regular',
    color:"#000000"
  },
  modal_View: {
    height: 160,
    width:"95%",
    marginHorizontal: 10,
    padding:15,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    alignItems: 'center',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  txtfeild:{
    // backgroundColor:"red",
    // justifyContent: 'center',
    // alignItems: 'center'
    // height: 45,
    // width: '94%',
    // borderBottomWidth: 2,
  },
  input_feild:{
    fontSize: 14,
    color: '#008080',
    fontFamily: 'Montserrat-Regular',
  },
  dropdown: {
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    paddingHorizontal:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default Style;
