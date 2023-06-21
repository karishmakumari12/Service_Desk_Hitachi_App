import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Image_Path from '../../constants/Image_Path/Image_Path';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Custom_Flatlist_Box from '../../components/Custom_Flatlist_Box/Custom_Flatlist_Box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiConfig from '../../config/apiConfig';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { HttpRequest } from './httpRequest';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setUserName, setEmployeeId, setLoader} from '../../redux/actions';

const {height, width} = Dimensions.get('screen');


const Close_Screen = () => {
  const navigation = useNavigation();
  const {incident} = HttpRequest();
  // const [loader, setLoader] = useState(true);
  const [details, setDetails] = useState([]);
  const {userName, EmpId, loader} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log('incident', incident);
  

  // ====== CALLING API WHEN PAGE RELOAD ======
  useEffect(() => {
   
  }, [incident]);

  const renderItem = ({item, index}) => (
    // console.log('items renderItem', item),
    (<Custom_Flatlist_Box item={item} navigation={navigation} />)
  );

  return (
    <View style={{flex: 1}}>
     
      <View
        style={{
          backgroundColor: '#04222C',
          alignItems: 'center',
          marginTop: 10,
        }}>
       
      </View>
       {/* ======== Flatlist ======== */}
       {loader ? (
              <FlatList
                data={incident}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                listMode="SCROLLVIEW"

              />
            ) : (
              <>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <SkeletonPlaceholder borderRadius={4}>
                    <View
                      style={{
                        // backgroundColor: '#ffffff',
                        height: height * 0.195,
                        marginHorizontal: 20,
                        marginTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        paddingVertical: 5,
                      }}
                    />
                    <View
                      style={{
                        // backgroundColor: '#ffffff',
                        height: height * 0.195,
                        marginHorizontal: 20,
                        marginTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        paddingVertical: 5,
                      }}
                    />
                    <View
                      style={{
                        // backgroundColor: '#ffffff',
                        height: height * 0.195,
                        marginHorizontal: 20,
                        marginTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        paddingVertical: 5,
                      }}
                    />
                     <View
                      style={{
                        // backgroundColor: '#ffffff',
                        height: height * 0.195,
                        marginHorizontal: 20,
                        marginTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        paddingVertical: 5,
                      }}
                    />
                     <View
                      style={{
                        // backgroundColor: '#ffffff',
                        height: height * 0.195,
                        marginHorizontal: 20,
                        marginTop: 16,
                        paddingHorizontal: 16,
                        borderRadius: 5,
                        paddingVertical: 5,
                      }}
                    />
                  </SkeletonPlaceholder>
                </ScrollView>
                {/* <AppLoader /> */}
              </>

              // <View
              //   style={{
              //     backgroundColor: 'transparent',
              //     flex: 1,
              //     justifyContent: 'center',
              //     alignItems: 'center',
              //   }}>
              //   <Text
              //     style={{
              //       color: '#868686',
              //       fontSize: 20,
              //     }}>
              //     Not Found...!!
              //   </Text>
              // </View>
            )}
      {/* ================ ACTIVITY INDICATOR ================ */}
      {/* {loader === true ? (
        <ActivityIndicator
          size="large"
          color="#04222C"
          animating={loader}
          style={{alignSelf: 'center'}}
        />
      ) : (
        <Custom_Flatlist details={details} check="inactive" />
      )} */}
    </View>
  );
};
export default Close_Screen;

const styles = StyleSheet.create({
  flatcontainer: {
    // backgroundColor:"yellow",
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatitems: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: '95%',
    alignItems: 'center',
    borderRadius: 3,
  },
  color_sty: {
    fontSize: 16,
    // fontWeight:"600"
    fontFamily: 'Montserrat-Regular',
  },
});
