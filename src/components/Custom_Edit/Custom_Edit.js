import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import Custom_Modal from '../Custom_Modal/Custom_Modal';
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigation } from '@react-navigation/native';
import Style from '../../Style';
const {height, width} = Dimensions.get('screen');
const Custom_Edit =props=> {
  const navigation=useNavigation();

    // ======== USEBACKHANDLER ========
    useBackHandler(useCallback(
      ()=>{
  Alert.alert("","are you sure to exit the app?",
  [{
    text:"No",
    onPress:()=>null,
    style:'cancel',
  },{
    text:"Yes",
    onPress:()=>{
      navigation.goBack()
  },
      }]);
  return true;
    },
    [navigation.goBack],
    ))
  const [ticketno, setTicketno] = useState(props.ticket_no);
  const Status_list = [];
  const [store_all, setStore_All] = useState([]);
  const [list_of_status, setList_Of_Status] = useState([]);
  const [status, setStatus] = useState('');
  const [errorstatus, setErrorStatus] = useState(null);
  const [status1, setStatus1] = useState('');
  const [description, setDescription] = useState('');
  const [errordescription, setErrorDescription] = useState('');
  const [indicator, setIndicator] = useState(true);
  const [holdreason, setHoldReason] = useState('');
  const [resolved, setResolved] = useState(false);
  const [resolution_note, setResolution_note] = useState('');
  const [checking, setChecking] = useState(false);
  const [errorHold, setErrorHold] = useState(null);
  const [errorResolve, setErrorResolve] = useState(null);
  const [toastcheck, setToastCheck] = useState(null);
  //  ========== validation =============
  const status_validation = description => {
    if (description === '') {
      setErrorStatus('Please Select the status');
    } else {
      setErrorStatus(null);
    }
  };

  const Des_validation = description => {
    if (description === '') {
      setErrorDescription('please enter description');
    } else {
      setErrorDescription(null);
    }
  };
  const hold_validation = hold => {
    if (hold === '') {
      setErrorHold('please enter Hold reason');
    } else {
      setErrorHold(null);
    }
  };
  const resolve_validation = resolved => {
    if (resolved === '') {
      setErrorResolve('please enter Resolve Reason');
    } else {
      setErrorResolve(null);
    }
  };

  const validation = () => {
    let flag = true;
    if (status === '') {
      setErrorStatus('Please Select the status');
      flag = false;
    }
    if (description === '') {
      setErrorDescription('please enter description');
      flag = false;
    }
    if (status === 'Resolved') {
      resolve_validation(resolution_note);
    }
    if (status === 'Hold') {
      hold_validation(holdreason);
    }
    return flag;
  };
  // =========== Show Toast Modal =========
  const showToast = () => {
    setTimeout(() => {
      setToastCheck(null);
    }, 5000);
    setToastCheck(true);
  };
  // ======= Error Toast ========
  const ErrorToast = () => {
    setTimeout(() => {
      setToastCheck(null);
    }, 5000);
    setToastCheck(false);
  };

  // ========= View all tickets Appi calling =====
  const View_all_tickets = async () => {
    await axios({
      method: 'POST',
      url: apiConfig.viewTicket,
      data: {
        ticketNumber: ticketno,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res?.status === 200) {
          console.log(
            '========= list View all tickets ========',
            res.data.ticket_detail,
          );
          setStore_All(res?.data?.ticket_detail[0]);
        }
      })
      .catch(err => {
        // console.log(err, '==== fail ====');
      });
  };
  // ========== CALL STATUS TICKET API ===========
  const Status_API = async () => {
    await axios({
      method: 'POST',
      url: apiConfig.status,
      data: {
        servicedesk: 'Incident',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res?.status === 200) {
          console.log('========= list with status========', res?.data?.Status);
          for (i in res?.data?.Status) {
            Status_list.push(res?.data?.Status[i]);
          }
          setList_Of_Status(Status_list);
          setIndicator(false);
        }
      })
      .catch(err => {
        setIndicator(false);
        // console.log(err, '==== fail ====');
      });
  };

  // ========== CALL UPDATE TICKET API ===========
  const Update_API = async () => {
    await axios({
      method: 'POST',
      url: apiConfig.updateTicket,
      data: {
        ticketstatus_name: status,
        ticketstatus: status1,
        description: description,
        IncidentNumber: ticketno,
        resolved: resolved,
        resolution_note: resolution_note,
        holdReason: holdreason,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res?.status === 200) {
          // console.log('========= UPDATE TICKET========', res?.data);
          setChecking(false);
          showToast();
        }
      })
      .catch(err => {
        setChecking(false);
        ErrorToast();
        // console.log(err, '==== fail ====');
      });
  };

  // =============== Save =============
  const onSave = () => {
    if (validation()) {
      setChecking(true);
      Update_API();
    }
  };
  useEffect(() => {
    View_all_tickets();
    Status_API();
  }, []);

  // ========= DROPDOWN ==========
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible1}>
      {/* ====== TOAST ======= */}
      {toastcheck === false || toastcheck === true ? (
        <View style={{backgroundColor: 'white', borderRadius: 10}}>
          {toastcheck === true ? (
            <Text style={[styles.textstyle, {color: 'green'}]}>
              Ticket Update Successfully
            </Text>
          ) : (
            <Text style={[styles.textstyle, {color: 'red'}]}>
              Fail to ticket update{' '}
            </Text>
          )}
        </View>
      ) : null}
      {checking === true ? <Custom_Modal /> : null}
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          backgroundColor: '#00000090',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={props.dismiss}></TouchableOpacity>
        <View style={styles.centeredView}>
          {/* ============ ACTIVITY INDICATOR ============= */}
          {indicator === true ? (
            <ActivityIndicator
              size="large"
              color="#04222C"
              animating={indicator}
              style={{alignSelf: 'center'}}
            />
          ) : (
            <ScrollView>
              <View style={styles.boxview}>
                <Text style={styles.txt}>Ticket Number:</Text>
                <Text style={styles.txt1}>{store_all.ticketnumber}</Text>
              </View>
              <View style={styles.boxview}>
                <Text style={styles.txt}>Summary:</Text>
                <Text style={styles.txt1}>{`${store_all.summary}`}</Text>
              </View>
              <View style={styles.boxview}>
                <Text style={styles.txt}>Category:</Text>
                <Text style={styles.txt1}>{store_all.category}</Text>
              </View>
              <View style={styles.boxview}>
                <Text style={styles.txt}>Created Data:</Text>
                <Text style={styles.txt1}>
                  {new Date(store_all.created).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.boxview}>
                <Text style={styles.txt}>Modified Date:</Text>
                <Text style={styles.txt1}>
                  {new Date(store_all.modified).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.boxview1}>
                <Text style={styles.txt}>Status:</Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={list_of_status}
                  search
                  maxHeight={250}
                  labelField="name"
                  valueField="id"
                  placeholder="- - - - Select Status - - - -"
                  searchPlaceholder="Search..."
                  onChange={item => {
                    setStatus(item.name);
                    setStatus1(item.ref);
                    status_validation(item.name);
                  }}
                  renderItem={renderItem}
                />
                {/* ======== Error ======= */}
                {errorstatus != null ? (
                  <Text style={{color: 'red', fontSize: 12, paddingLeft: 10}}>
                    {errorstatus}
                  </Text>
                ) : null}
              </View>
              {/* ========== ADD RESOLUTION NODE ========== */}
              {status === 'Resolved' ? (
                <View style={styles.boxview1}>
                  <Text style={styles.txt}>Resolution Note:</Text>
                  <TextInput
                    style={[styles.dropdown, styles.txt1]}
                    onChangeText={txt => {
                      setResolution_note(txt);
                      setResolved(true);
                      resolve_validation(txt);
                    }}
                  />
                  {errorResolve != null ? (
                    <Text style={styles.errortxt}>{errorResolve}</Text>
                  ) : null}
                </View>
              ) : null}
              {/* ========== ADD HOLD Feild ========== */}
              {status === 'Hold' ? (
                <View style={styles.boxview1}>
                  <Text style={styles.txt}>Hold Reason:</Text>
                  <TextInput
                    style={[styles.dropdown, styles.txt1]}
                    onChangeText={txt => {
                      setHoldReason(txt), hold_validation(txt);
                    }}
                  />
                  {errorHold != null ? (
                    <Text style={styles.errortxt}>{errorHold}</Text>
                  ) : null}
                </View>
              ) : null}
              <View style={[styles.boxview1]}>
                <Text style={styles.txt}>Description:</Text>
                <View style={styles.dropdown1}>
                  <TextInput
                    multiline={true}
                    style={{
                      color: '#8B8B8B',
                      fontSize: 14,
                      fontFamily: 'Montserrat-Regular',
                      // backgroundColor: 'green',
                      paddingRight: 10,
                      lineHeight: 20,
                      textAlignVertical: 'top',
                      flex: 1,
                    }}
                    onChangeText={txt => {
                      setDescription(txt), Des_validation(txt);
                    }}
                  />
                </View>
                {errordescription != null ? (
                  <Text style={styles.errortxt}>{errordescription}</Text>
                ) : null}
              </View>
              <View
                style={{
                  height: 50,
                  alignContent: 'center',
                  width: '95%',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={Style.modal_button}
                  onPress={props.dismiss}>
                  <Text style={Style.button_text}>Exit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Style.modal_button}
                  onPress={() => {
                    console.log('bnm-----', holdreason);
                    onSave();
                  }}>
                  <Text style={Style.button_text}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default Custom_Edit;

const styles = StyleSheet.create({
  boxview: {
    minHeight: 50,
    justifyContent: 'space-around',
    width: '95%',
    alignSelf: 'center',
  },
  boxview1: {
    minHeight: 60,
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    // backgroundColor:"red",
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    // backgroundColor:"red"
  },
  txt1: {
    color: '#8B8B8B',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  centeredView: {
    backgroundColor: '#E7E7E7',
    height: '70%',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btntouch: {
    backgroundColor: '#089089',
    height: 50,
    width: '45%',
    borderRadius: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropdown: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 3,
    paddingRight: 10,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropdown1: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 3,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 15,
    color: '#8B8B8B',
  },
  placeholderStyle: {
    fontSize: 15,
    color: '#8B8B8B',
  },
  selectedTextStyle: {
    fontSize: 15,
    color: '#8B8B8B',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
    color: 'black',
  },
  textstyle: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnstyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  errortxt: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
  },
});
