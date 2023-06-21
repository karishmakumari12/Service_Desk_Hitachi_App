import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  Modal,
  ScrollView,
  Image,
  Alert,
  BackHandler,
  RefreshControl, SafeAreaView,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Image_Path from '../../constants/Image_Path/Image_Path';
import navigationStrings from '../../constants/navigationStrings';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {useBackHandler} from '@react-native-community/hooks';
import {useNavigation} from '@react-navigation/native';
import Style from '../../Style';
const {height, width} = Dimensions.get('screen');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Showdata_Screen = props => {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const [modalvisible, setModalVisible] = useState(false);

  const [refreshing, setRefreshing] = React.useState(false);



  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  // ======== USEBACKHANDLER ========
  function backHandlerAction() {
    Alert.alert('', 'are you sure to exit the app?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  }
  useBackHandler(backHandlerAction);
  // ==== fatch data=====
  const _retrieveData = async () => {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      setDetails(JSON.parse(value));
      setIndicator(false);
    }
  };
  useEffect(() => {
    _retrieveData();
  }, []);
  return (
    <>
    {/* <SafeAreaView style={styles.container}> */}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        // scrollEnabled={false} 
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl
          
          progressBackgroundColor={'green'}
            refreshing={refreshing}
            onRefresh={onRefresh}
        />

        }
      >
    <View style={{flex: 1, width: '100%'}}>
      {/* =============== MODAL =========== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => setModalVisible(false)}></TouchableOpacity>
          <View style={[Style.modal_View, {alignSelf: 'center'}]}>
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                width: '100%',
              }}
              onPress={() => setModalVisible(false)}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                }}
                source={Image_Path.Cross_Icon}
              />
            </TouchableOpacity>
            <Text style={[Style.modal_text, {alignSelf: 'flex-start'}]}>
              Select the Tickets type:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: 70,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={Style.modal_button}
                onPress={() => {
                  setModalVisible(false);
                  props.navigation.navigate(navigationStrings.Incident_Screen, {
                    Details: details,
                  });
                }}>
                <Text style={Style.button_text}>Incident</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.modal_button}
                onPress={() => {
                  setModalVisible(false);
                  props.navigation.navigate(navigationStrings.Service_Request, {
                    Details: details,
                  });
                }}>
                <Text style={Style.button_text}>Service Request</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => setModalVisible(false)}></TouchableOpacity>
        </View>
      </Modal>
      {/* ========= CUSTOM HEADER ========= */}
      {/* <Custom_Header
        navigation={navigation}
        Image_icon={Image_Path.Menu_Icon}
        path={true}
      /> */}
      <View style={styles.main}>
        <View style={{height: 60, justifyContent: 'center'}}>
          <Text style={styles.txt}>Welcome {details.name}</Text>
        </View>
        {/* ========= USE HEADER ========= */}
        <ActivityIndicator
          size="large"
          color="#04222C"
          animating={indicator}
          style={{alignSelf: 'center'}}
        />
          <View
            style={{
              justifyContent: 'center',
              flex:1,
            }}>
            <View
              style={{
                height: 150,
                justifyContent: 'space-evenly',
                marginBottom:"20%"
              }}>
              <TouchableOpacity
                style={Style.button_style}
                onPress={() => setModalVisible(true)}>
                <Text style={Style.button_text}>Create Ticket</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.button_style}
                onPress={() =>
                  props.navigation.navigate(navigationStrings.Update, {
                    Details: details.emp_id,
                  })
                }>
                <Text style={Style.button_text}>Update Ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </ScrollView> */}
      </View>
    </View>
    </ScrollView>

    {/* </SafeAreaView> */}
    </>

  );
};
export default Showdata_Screen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    // backgroundColor: 'green',
  },

  buttonOpen: {
    height: 60,
    width: '45%',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: 'center',
    // backgroundColor: '#089089',
    backgroundColor: 'green',
  },
  txt: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  centeredView: {
    flex: 1,
    margin: 0,
    backgroundColor: '#00000090',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    // flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
