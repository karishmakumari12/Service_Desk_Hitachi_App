import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  TopHeader: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  icon_view: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0000001C',
  },
  card_View: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    // borderWidth: 1,
    // borderColor: '#C0C0C029',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  profile_View: {
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
    // borderColor: '#83838324',
    // borderWidth: 1,
    // elevation: 3,
   
  },
  camera_View: {
    backgroundColor: '#F12547',
    height: 35,
    width: 35,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -35,
    marginTop: -25,
  },
  detail_View: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'space-between',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 2,
  },
});
export default Stylesheet;
