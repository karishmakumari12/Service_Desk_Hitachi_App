import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ToastAndroid,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import Stylesheet from './Stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import Custom_Modal from '../../components/Custom_Modal/Custom_Modal';
import moment from 'moment';
import axios from 'axios';
import AppLoader from '../../constants/AppLoader';
import {ScrollView} from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setUserName, setEmployeeId} from '../../redux/actions';
const height = Dimensions.get('screen').height;

const UpdateScreen = ({navigation, item, route}) => {
  const {width} = useWindowDimensions();
  const details = route.params;
  // console.log('vvvv', details);
  const source = {
    html: `
  ${details?.description}`,
  };

  // console.log('vvvv', source);
  // const data = [
  //   {label: 'Item 1', value: 'open'},
  //   {label: 'Item 2', value: 'wip'},
  //   {label: 'Item 3', value: 'hold'},
  //   {label: 'Item 4', value: 'close'},
  //   {label: 'Item 5', value: 'user not responding'},
  //   {label: 'Item 6', value: 'await user confirmation'},
  //   {label: 'Item 7', value: 'scheduled'},
  //   {label: 'Item 8', value: 'resolved'},
  //   {label: 'Item 8', value: 'pending with oem'},
  //   {label: 'Item 8', value: 'under observation'},
  // ];

  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [change_color, setChange_Color] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [ref, setRef] = useState('');
  const [note, setNote] = useState('');
  const [exmp, setExmp] = useState('');
  const {userName, EmpId, dynamicUrl} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  console.log('dynamicUrl', dynamicUrl.status);
  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    setLoader(true);
    var data = JSON.stringify({
      servicedesk: 'Incident',
      action: 'StatusFetch',
    });

    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/statusfetch',
      headers: {
        Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInput = () => {
    if (!name && !note) {
      ToastAndroid.showWithGravityAndOffset(
        'Feilds cannot be left empty',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      updateIncident();
    }
  };

  const updateIncident = () => {
    setLoader(true);
    console.log(
      'sending',
      ref,
      details.description,
      details.ticketnumber,
      name,
      note,
    );
    try {
      axios
        .post('http://3.110.103.247/api/update_ticket/', {
          ticketstatus: ref,
          description: details.description,
          IncidentNumber: details.ticketnumber,
          resolved: name === 'Resolved' ? true : false,
          ticketstatus_name: name,
          resolution_note: note,
          holdReason: '',
        })
        .then(response => {
          console.log('update response', response.data);
          setLoader(false);
          setModalVisible(true);
        })
        .catch(error => {
          console.log(error);
          setLoader(false);
        });
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // flex: 1,
          padding: 20,
          justifyContent: 'center',
        }}>
        {/* <SafeAreaView style={Stylesheet.main}> */}
        {/* <Custom_Header label={'Update Ticket'} navigation={navigation} /> */}
        {/* <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          behavior="padding"
          style={{
            flex: 1,
          }}> */}

        <View style={Stylesheet.style_Container}>
          <TextInput
            label="Ticket Number"
            value={details.ticketnumber}
            mode="outlined"
            textColor="#000000"
            editable={false}
            style={Stylesheet.txtFeild_Style}
          />
          <TextInput
            label="Summary"
            value={details.summary}
            mode="outlined"
            textColor="#000000"
            editable={false}
            multiline={true}
            style={[Stylesheet.txtFeild_Style]}
          />
          <TextInput
            label={'Description'}
            value={details?.description}
            mode="outlined"
            editable={false}
            multiline={true}
            outlineColor="#828282"
            textColor="#000000"
            style={Stylesheet.txtFeild_Style}
          />

          <TextInput
            mode="outlined"
            label="category"
            editable={false}
            value={details.category}
            outlineColor="#828282"
            textColor="#000000"
            style={Stylesheet.txtFeild_Style}
          />

          <TextInput
            mode="outlined"
            label="Created"
            value={moment(details.created).format(
              'DD/MMMM/YYYY, hh : mm : ss a',
            )}
            textColor="#000000"
            editable={false}
            outlineColor="#828282"
            style={Stylesheet.txtFeild_Style}
          />
          {/* <TextInput
            mode="outlined"
            label="Closed Date"
            value="closed-date"
            textColor="#000000"
            editable={false}
            outlineColor="#828282"
            style={Stylesheet.txtFeild_Style}
          /> */}
          <Dropdown
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: change_color ? '#CC0022' : '#828282',
              paddingHorizontal: 10,
              marginTop: 25,
              // backgroundColor: 'red',
            }}
            disable={details.status === 'Resolved' ? true : false}
            onFocus={() => {
              // console.log('---->');
              setChange_Color(true);
            }}
            onBlur={() => {
              // console.log('blur--->');
              setChange_Color(false);
            }}
            placeholder={details.status}
            placeholderStyle={{
              color: 'black',
            }}
            data={data}
            maxHeight={300}
            labelField="name"
            valueField="name"
            onChange={val => {
              setName(val.name), setRef(val.ref), console.log('vvv', val.name);
            }}
            selectedTextStyle={{
              color: 'black',
            }}
            renderItem={val => {
              return (
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'GothicA1-Regular',
                    }}>
                    {val.name}
                  </Text>
                </View>
              );
            }}
          />

          <TextInput
            mode="outlined"
            label="Note"
            editable={true}
            activeOutlineColor="#CC0022"
            outlineColor="#828282"
            multiline={true}
            textColor="#000000"
            style={Stylesheet.txtFeild_Style}
            onChangeText={val => setNote(val)}
          />
          <View style={Stylesheet.button_Container}>
            {/* <TouchableOpacity>
              <LinearGradient
                colors={['#BBBBBB', '#767676']}
                style={Stylesheet.btn_view}>
                <Text style={Stylesheet.btn_txt}>Close</Text>
              </LinearGradient>
            </TouchableOpacity> */}
            <TouchableOpacity
              disabled={details.status === 'Resolved' ? true : false}
              onPress={() => {
                handleInput();
              }}>
              <LinearGradient
                colors={
                  details.status === 'Resolved'
                    ? ['#e2e2e2', '#e2e2e2']
                    : ['#F12547', '#CC0022']
                }
                style={Stylesheet.btn_view}>
                <Text
                  style={{
                    color:
                      details.status === 'Resolved' ? '#808080' : '#FFFFFF',
                    fontSize: 13,
                    fontFamily: 'GothicA1-SemiBold',
                  }}>
                  Update
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {details.status === 'Resolved' ? (
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'GothicA1-Bold',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            Incident Resolved !!
          </Text>
        ) : null}
        {/* </KeyboardAwareScrollView> */}
        {modalVisible ? (
          <Custom_Modal
            modalvisible={modalVisible}
            title={`Your Incident has been Updated successfully. (IN No. - ${details.ticketnumber})`}
            onDismiss={() => {
              console.log('dimiss===>');
              setModalVisible(false);
            }}
          />
        ) : null}
        {/* </SafeAreaView> */}
      </ScrollView>

      {loader ? <AppLoader /> : null}
    </>
  );
};

export default UpdateScreen;
