import {StyleSheet, Text, View, Dimensions, FlatList,ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import Image_Path from '../../constants/Image_Path/Image_Path';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Custom_Flatlist from '../../components/Custom_Flatlist/Custom_Flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height, width} = Dimensions.get('screen');
const ViewTicketScreen = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [details,setDetails]=useState([]);

   // ==== fatch data=====
   const _retrieveData = async () => {
    const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        setDetails(JSON.parse(value));
      } 
      setLoader(false);
  };
  
  // ====== CALLING API WHEN PAGE RELOAD ======
  useEffect(() => {
      setTimeout(()=>{
      _retrieveData()
      },1500)   
  },[]);

  return (
    <View style={{flex:1}}>
      <Custom_Header
        navigation={navigation}
        Image_icon={Image_Path.BackIcon}
        path={false}
      />
      <View
        style={{
          backgroundColor: '#04222C',
          alignItems: 'center',
          marginTop:10,
        }}> 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height:40,
          width: "95%",
        }}>
        <Text style={[{width: width * 0.15,color:"#FFFFFF",},styles.color_sty]}>S.No.</Text>
        <Text style={[{width: width * 0.25,color:"#FFFFFF",},styles.color_sty]}>Ticket No.</Text>
        <Text style={[{width: width * 0.25,color:"#FFFFFF",},styles.color_sty]}>Status</Text>
      </View>

        </View>
       {/* ================ ACTIVITY INDICATOR ================ */}
      {loader === true ? (
            <ActivityIndicator
              size="large"
              color="#04222C"
              animating={loader}
              style={{alignSelf: 'center'}}
              />
              ) :( 
            <Custom_Flatlist
            details={details}
            check="active"/>
      )}
    </View>
  );
};
export default ViewTicketScreen;

const styles = StyleSheet.create({
  color_sty:{
    fontSize:16,
    // fontWeight:"600"
    fontFamily: 'Montserrat-Regular',
  }
});
