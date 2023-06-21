import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
const Stylesheet = StyleSheet.create({
  card_DetailsView: {
    backgroundColor: '#ffffff',
    padding: 15,
    // height: height * 0.21,
    marginHorizontal: 20,
    marginTop: 16,
    // paddingHorizontal: 16,
    borderRadius: 5,
    // paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    // marginTop: 10
    marginBottom: 10

  },
  cardViewLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    marginTop: 5,

  },
  cardViewLine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    // width: 100,
    padding: 2,
    flex: 1,
  },
});
export default Stylesheet;
