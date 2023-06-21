import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Stylesheet from './Stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import Image_Path from '../../constants/Image_Path/Image_Path';
import Custom_Flatlist_Box from '../../components/Custom_Flatlist_Box/Custom_Flatlist_Box';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import AppLoader from '../../constants/AppLoader';
import moment from 'moment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setUserName, setEmployeeId} from '../../redux/actions';
import {HttpRequest} from './httpRequest';
const {height, width} = Dimensions.get('screen');
const data = [
  {
    id: 1,
    summary: 'System ram update 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 2,
    summary: 'System ram update 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 3,
    summary: 'System ram update 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 4,
    summary: 'System ram update 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 5,
    summary: 'System ram update 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 6,
    summary: 'System ram update 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
  {
    id: 7,
    summary: 'System ram update 7',
    description: 'Lorem Ipsum is simply dummy text of the printing and..',
    submitter: 'Lorem Ipsum',
    created: '01/12/2022',
    organization: 'Lorem Ipsum',
    category: 'Lorem Ipsum',
  },
];

const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 150;
const ITEM_IMG = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;

const Open_Incident_Screen = ({navigation, route}) => {
  const [data, setData] = useState();
  const [notFound, setNotFound] = useState(false);
  const {userName, EmpId} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const rev = route.params;
  const {loader, currentOpen, incident} = HttpRequest();

  useEffect(() => {
    filterByTodaysDate(incident);
    console.log('called');
  }, [incident]);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  // const GetIncident = () => {
  //   setLoader(true);
  //   AsyncStorage.getItem('employeeId').then(val => {
  //     if (val != null) {
  //       dispatch(setEmployeeId(val));
  //       // console.log('async api call', val);

  //       try {
  //         axios
  //           .post('http://3.110.103.247/api/get_tickets/', {
  //             empid: val,
  //             status: 'active',
  //           })
  //           .then(response => {
  //             // console.log('from api', response.data);
  //             // setIncident(rev === 'TodaysTicket' ? filter() : response?.data?.Tickets);
  //             filterByTodaysDate(response?.data?.Tickets);
  //             // setIncide(true);
  //             // console.log("items", response?.data?.Tickets.length)
  //             setLoader(false);
  //             setCurrentOpen(response?.data?.Tickets.length);
  //           })
  //           .catch(error => {
  //             console.log(error);
  //             setLoader(false);
  //           });
  //       } catch (error) {
  //         console.log('error');
  //         setLoader(false);
  //       }
  //     } else {
  //       dispatch(setEmployeeId('Emp Id'));
  //     }
  //   });
  // };

  const filterByTodaysDate = incident => {
    console.log('filterByTodaysDate', incident);
    let tryArr = [];
    if (rev?.screen === 'TodaysTicket') {
      console.log('from TodaysTicket', incident);
      // setIncident()

      incident?.map(item => {
        const revDate = moment(item?.created).format('DD/MM/YY');
        console.log('revDate', revDate);

        const currentDate = moment().toString();
        const v = moment(currentDate).format('DD/MM/YY');
        console.log('currentDate', v);

        if (revDate == v) {
          setNotFound(false);
          console.log('yes matched');
          tryArr = [...tryArr, item];
        } else {
          console.log('DATA NOT FOUND');
          setNotFound(true);
        }
      });
      setData(tryArr);
    } else if (incident) {
      setData(incident);
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  //   ===== RenderItem =====
  const renderItem = ({item, index}) => {
    const scale = scrollY.interpolate({
      inputRange: [-1, 0, ITEM_IMG * index, ITEM_IMG * (index + 2)],
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={[
          styles.card_DetailsView,
          {
            transform: [{scale}],
          },
        ]}>
        <View style={styles.cardViewLine2}>
          <Text
            style={{
              fontSize: 12,
              color:
                item.severit === 'Severity1'
                  ? '#FF163D'
                  : item.severit === 'Severity2'
                  ? '#F59B44'
                  : item.severit === 'Severity3'
                  ? '#F6D537'
                  : item.severit === 'Severity4'
                  ? '#2FEA8D'
                  : '#FEB773',
              fontFamily: 'GothicA1-Regular',
            }}>
            {item?.severit}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#FF163D',
              fontFamily: 'GothicA1-Regular',
            }}>
            {' '}
            : {item?.status}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: '#000000',
              marginBottom: 10,
              fontFamily: 'GothicA1-Bold',
            }}>
            {item?.summary}
          </Text>
        </View>

        {/* <View
          style={{
            flex: 1,
            marginTop: 5,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              color: '#757575',
              fontFamily: 'GothicA1-Regular',
            }}>
            {item?.description}
          </Text>
        </View> */}

        <View style={styles.cardViewLine}>
          {/* <Text style={{fontSize: 12, color: '#000000'}}>
            Submitted By :
            <Text style={{fontSize: 12, color: '#757575'}}>
              {item?.submitter_name}
            </Text>
          </Text>
          <Text style={{fontSize: 12, color: '#000000'}}>
            Created date :
            <Text style={{fontSize: 12, color: '#757575'}}>Created date :</Text>
          </Text> */}

          <View
            style={{
              // flex: 1,
              // backgroundColor: 'blue',
              width: 160,
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                fontFamily: 'GothicA1-Regular',
                color: '#000000',
              }}>
              Submitted By :
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color: '#757575',
                  fontFamily: 'GothicA1-Regular',
                  marginLeft: 10,
                }}>
                {item?.submitter_name}
              </Text>
            </Text>
          </View>

          <View
            style={{
              // flex: 1,
              // backgroundColor: 'blue',
              width: 140,
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: 'GothicA1-Regular',
              }}>
              Created date :
              <Text
                style={{
                  fontSize: 12,
                  color: '#757575',
                  fontFamily: 'GothicA1-Regular',
                }}>
                {moment(item?.created).format('DD/MM/YY')}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.cardViewLine}>
          {/* <Text style={{fontSize: 12, color: '#000000'}}>
            Organisation :
            <Text style={{fontSize: 12, color: '#757575'}}>
              {item.organization}
            </Text>
          </Text>
          <Text style={{fontSize: 12, color: '#000000'}}>
            Category:
            <Text style={{fontSize: 12, color: '#444444'}}>
              {item?.category}
            </Text>
          </Text> */}

          <View
          style={{
            // flex: 1,
            // backgroundColor: 'blue',
            width: 160,
          }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: 'GothicA1-Regular',
              }}>
              Organisation :
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 12,
                  color: '#757575',
                  fontFamily: 'GothicA1-Regular',
                  marginLeft: 10,
                }}>
                {item.organisation == null ? 'NA' : item.organisation}
              </Text>
            </Text>
          </View>

          <View
           style={{
            // flex: 1,
            // backgroundColor: 'blue',
            width: 160,
          }}
          >
            <Text
                numberOfLines={1}

              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: 'GothicA1-Regular',
              }}>
              Category:
              <Text 
                numberOfLines={1}
              style={{fontSize: 12, color: '#444444',  fontFamily: 'GothicA1-Regular',}}>
                {item?.category}
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateScreen', item)}
          style={{
            backgroundColor: '#CC0022',
            alignSelf: 'flex-end',
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginTop: 10,
            borderRadius: 32,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#ffffff',
              fontFamily: 'GothicA1-Regular',
            }}>
            Details
          </Text>
          <Image
            style={{
              width: 5,
              height: 8,
              marginLeft: 5,
            }}
            source={require('../../assets/images/rightIcon.png')}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // <Custom_Flatlist_Box navigation={navigation} item={item} />

  return (
    <SafeAreaView style={Stylesheet.main}>
      {/* ===== header ==== */}
      {/* <Custom_Header label={'Open Tickets'} navigation={navigation} /> */}

      {/* =====  Search view  ======= */}
      {/* <View elevation={1} style={Stylesheet.searchView}>
          <TextInput
            style={Stylesheet.searchtxt}
            placeholder="search tickets"
            placeholderTextColor="#868686"
          />
          <Icon name="search" size={16} color={'#868686'} />
        </View> */}

      <View
        style={{
          padding: 15,
          marginTop: 10,
          // backgroundColor: 'red'
        }}>
        <View
          style={{
            //  marginHorizontal: 20,
            borderRadius: 32,
            // borderWidth: 1,
            // borderColor: '#DADADA36',
            height: 40,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 3,
          }}>
          <TextInput
            style={Stylesheet.searchtxt}
            placeholder="Search Incident"
            placeholderTextColor="#868686"
          />
          {/* <Icon name="search" size={16} color={'#868686'} /> */}
          <Image
            style={{
              height: 22,
              width: 22,
              //backgroundColor: 'red',
            }}
            source={Image_Path.SearchIcon}
          />
        </View>
      </View>

      {/* ======= chips ====== */}
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          elevation={3}
          style={[Stylesheet.chipView, {borderColor: '#CC0022'}]}>
          <Text style={[Stylesheet.chipTxt, {color: '#CC0022'}]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          elevation={3}
          style={[Stylesheet.chipView, {borderColor: '#E9E9E9'}]}>
          <Text style={[Stylesheet.chipTxt, {color: '#676767'}]}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          elevation={3}
          style={[Stylesheet.chipView, {borderColor: '#E9E9E9'}]}>
          <Text style={[Stylesheet.chipTxt, {color: '#676767'}]}>WIP</Text>
        </TouchableOpacity>
      </View>
      {/* ======== Flatlist ======== */}
      {loader ? (
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
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <>
          {notFound ? (
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={require('../../assets/images/errorIcon.png')}
              />
              <Text
                style={{
                  color: '#CC0022',
                  fontSize: 15,
                  fontFamily: 'Montserrat-Medium',
                  marginTop: 10,
                }}>
                Sorry Not Found..!!
              </Text>
            </View>
          ) : (
            <Animated.FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                {useNativeDriver: true},
              )}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Open_Incident_Screen;

const styles = StyleSheet.create({
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
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    // marginTop: 10
    marginBottom: 10,
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
