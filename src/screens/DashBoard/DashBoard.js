import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Stylesheet from './Stylesheet';
import Image_Path from '../../constants/Image_Path/Image_Path';
import Custom_Flatlist_Box from '../../components/Custom_Flatlist_Box/Custom_Flatlist_Box';
import navigationStrings from '../../constants/navigationStrings';
import axios from 'axios';
import AppLoader from '../../constants/AppLoader';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSignIn,
  setUserName,
  setEmployeeId,
  setLoader,
} from '../../redux/actions';
import {HttpRequest} from './httpRequest';
import {Set_Item, Get_Item} from '../../components/GlobalStorage/Custom_Store';
const {height, width} = Dimensions.get('screen');

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const DashBoard = ({navigation}) => {
  // const [incident, setIncident] = useState([]);
  // const [loader, setLoader] = useState(false);
  const [Incident, setIncide] = useState(false);
  // const [currentOpen, setCurrentOpen] = useState();
  // const [inactiveIncident, setInactiveIncident] = useState();
  const {userName, EmpId, loader} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const {incident, currentOpen, inactiveIncident, GetIncident} = HttpRequest();

  // console.log("bbbbbb---", incident, currentOpen, inactiveIncident);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    GetIncident();
    getData();
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  //   ===== RenderItem =====
  const renderItem = ({item, index}) => (
    // console.log('items renderItem', item),
    <Custom_Flatlist_Box item={item} navigation={navigation} />
  );

  useEffect(() => {
    getData();
    GetIncident();
    // GetInactiveIncident();
  }, []);

  const getData = () => {
    Get_Item('userDetails', res => {
      if (res.name != null) {
        dispatch(setUserName(res.name));
      } else {
        dispatch(setUserName('Not Available'));
      }
      if (res.empid != null) {
        dispatch(setEmployeeId(res.empid));
      } else {
        dispatch(setEmployeeId('Not Available'));
      }
    });
  };

  return (
    <>
      <SafeAreaView style={Stylesheet.flex_style}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={Stylesheet.flex_style}>
            <View style={Stylesheet.topContainer}>
              <View
                style={{
                  backgroundColor: 'transparent',
                }}>
                <TouchableOpacity
                  style={Stylesheet.icon_view}
                  onPress={() => navigation.openDrawer()}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                    }}
                    source={Image_Path.Menu_Icon}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile_Screen')}>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    source={Image_Path.User_Picture}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    padding: 2,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 14,
                      color: '#3A3A3A',
                      marginTop: 5,
                      fontFamily: 'GothicA1-Bold',
                    }}>
                    Hello, {userName}
                  </Text>
                </View>
              </View>
            </View>

            {/* =====  Search view  ======= */}

            <View
              style={{
                padding: 15,
                marginTop: 10,
              }}>
              <View style={Stylesheet.searchView}>
                <TextInput
                  style={Stylesheet.searchtxt}
                  placeholder="Search Incident"
                  placeholderTextColor="#868686"
                />
                <Image
                  style={{
                    height: 22,
                    width: 22,
                  }}
                  source={Image_Path.SearchIcon}
                />
              </View>
            </View>

            {/* ==== Card ===== */}

            <View style={Stylesheet.cardView}>
              <TouchableOpacity
                style={[Stylesheet.cardStyle, {backgroundColor: '#45B8F0'}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={Stylesheet.icon_Text}>
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                      }}
                      source={Image_Path.TotalIncident}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 23, color: '#ffffff'}}>
                      {currentOpen != null
                        ? currentOpen + inactiveIncident
                        : 'NA'}
                    </Text>
                  </View>
                </View>
                <Text style={Stylesheet.status_txt}>Total Incidents</Text>
                <Text style={Stylesheet.status_txt}>Assigned</Text>

                <Image
                  style={Stylesheet.card_img}
                  source={Image_Path.left_icon}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Open_Incident_Screen')}
                style={[Stylesheet.cardStyle, {backgroundColor: '#F3D334'}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={Stylesheet.icon_Text}>
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                      }}
                      source={Image_Path.CurrentOpenIncidentIcon}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 23, color: '#ffffff'}}>
                      {currentOpen != null ? currentOpen : 'NA'}
                    </Text>
                  </View>
                </View>
                <Text style={Stylesheet.status_txt}>Current Open</Text>
                <Text style={Stylesheet.status_txt}>Incident</Text>
                <Image
                  style={Stylesheet.card_img}
                  source={Image_Path.right_icon}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[Stylesheet.cardStyle, {backgroundColor: '#2FEA8D'}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={Stylesheet.icon_Text}>
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                      }}
                      source={Image_Path.IncidentClosedIcon}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 23, color: '#ffffff'}}>
                      {currentOpen != null ? inactiveIncident : 'NA'}
                    </Text>
                  </View>
                </View>
                <Text style={Stylesheet.status_txt}>Total Incidents</Text>
                <Text style={Stylesheet.status_txt}>Closed</Text>
                <Image
                  style={Stylesheet.card_img}
                  source={Image_Path.left_icon}
                />
              </TouchableOpacity>
            </View>

            {/* ======= Today list ======== */}

            <View style={Stylesheet.todayView}>
              <Text style={{color: '#3d3d3d'}}>Today's Incident</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Open_Incident_Screen', {
                    screen: 'TodaysTicket',
                  })
                }>
                <Text style={{color: '#CC0022'}}>View All</Text>
              </TouchableOpacity>
            </View>

            {/* ======== Flatlist ======== */}
            {loader ? (
              <FlatList
                data={incident.slice(0, 5)}
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default DashBoard;

const styles = StyleSheet.create({});

{
  /* {loader ? (
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
</SkeletonPlaceholder>
</ScrollView>
<AppLoader />
</>
) : null}  */
}

// const GetInactiveIncident = () => {
//   setLoader(false);
//   AsyncStorage.getItem('employeeId').then(val => {
//     if (val != null) {
//       dispatch(setEmployeeId(val));
//       console.log('async api call', val);

//       try {
//         axios
//           .post('http://3.110.103.247/api/get_tickets/', {
//             empid: val,
//             status: 'inactive',
//           })
//           .then(response => {
//             // console.log('from api GetInactiveIncident', response.data);
//             // console.log('items inactive', response?.data?.Tickets.length);
//             setInactiveIncident(response?.data?.Tickets.length);
//           })
//           .catch(error => {
//             console.log(error);
//             setLoader(true);
//           });
//       } catch (error) {
//         console.log('error');
//         setLoader(true);
//       }
//     } else {
//       dispatch(setEmployeeId('Emp Id'));
//     }
//   });
// };

// const GetIncident = () => {
//   dispatch(setLoader(false));
//   AsyncStorage.getItem('employeeId').then(val => {
//     if (val != null) {
//       dispatch(setEmployeeId(val));
//       console.log('async api call', val);

//       try {
//         axios
//           .post('http://3.110.103.247/api/get_tickets/', {
//             empid: val,
//             status: 'active',
//           })
//           .then(response => {
//             // console.log('from api', response.data);
//             setIncident(response?.data?.Tickets);
//             // setIncide(true);
//             // console.log("items", response?.data?.Tickets.length)
//             dispatch(setLoader(true));
//             setCurrentOpen(response?.data?.Tickets.length);
//           })
//           .catch(error => {
//             console.log(error);
//             dispatch(setLoader(true));
//           });
//       } catch (error) {
//         console.log('error');
//         dispatch(setLoader(true));
//       }
//     } else {
//       dispatch(setEmployeeId('Emp Id'));
//     }
//   });
// };
