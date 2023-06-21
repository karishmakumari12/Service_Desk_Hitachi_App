import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Image_Path from '../../constants/Image_Path/Image_Path';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Custom_Submit from '../../components/Custom_Submit/Custom_Submit';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import Style from '../../Style';
import apiConfig from '../../config/apiConfig';
const Incident_Screen = props => {
  console.log('props details', props.route.params);
  const navigation = useNavigation();
  const [modalvisible, setModalVisible] = useState(false);
  const [userdata, setUserData] = useState(props.route.params.Details);
  const [severity_Data, setSeverity_Data] = useState([]);
  const [main_Category, setMain_Category] = useState([]);
  const [category1_id, setCategory1_id] = useState([]);
  const [category2_id, setCategory2_id] = useState([]);
  const [category3_id, setCategory3_id] = useState([]);
  const [category4_id, setCategory4_id] = useState([]);
  const [ticket_no, setTicket_No] = useState('');
  const [user_Details, setUser_Details] = useState({
    summary: '',
    submitter_name: userdata.name,
    submitter_email: userdata.email,
    phone_no: '',
    severity_id: '',
    category_id: '',
    description: '',
    summary_error: null,
    submitter_name_error: null,
    submitter_email_error: null,
    phone_no_error: null,
    severity_id_error: null,
    category_id_error: null,
    description_Error: null,
  });
  // ========= DROPDOWN ==========
  const category1 = [];
  const category2 = [];
  const category3 = [];
  const category4 = [];

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  // ========= SEVERITY API CALLING ===========
  const severity_api = async () => {
    await axios({
      method: 'post',
      url: apiConfig.severity,
      data: {
        servicedesk: 'Incident',
      },
      headers: {'content-type': 'application/json'},
    })
      .then(res => {
        if (res?.status === 200) {
          // console.log('======>', res?.data?.priority);
          setSeverity_Data(res?.data?.priority);
        }
      })
      .catch(err => {
        console.log('please check err', err);
      });
  };
  // ============= CATEGORY API FUNCTION ============
  const category_api = async () => {
    await axios({
      method: 'post',
      url: apiConfig.category,
      data: {
        desk: 'Incident',
      },
      headers: {'content-type': 'application/json'},
    })
      .then(res => {
        if (res?.status === 200) {
          // console.log('CATEGORY======>', res?.data?.Main_Category);
          setMain_Category(res?.data);
        }
      })
      .catch(err => {
        console.log('please check err', err);
      });
  };
  // ========= CATEGORY 1 =========
  const fun_category1 = () => {
    // console.log('=>', main_Category);
    if (category1.length !== 0) {
      const check = category1.length;
      for (var i = 0; i < check; i++) {
        category1.pop();
      }
    }
    for (i in main_Category) {
      // console.log('CATEGORY=>',main_Category[i]?.Main_Category);
      category1.push(main_Category[i]?.Main_Category);
    }
    // console.log('category1=>', category1);
    setCategory1_id(category1);
  };
  // ========= Category 2 ================
  const fun_category2 = name => {
    // console.log(name);
    if (category2_id.length !== 0) {
      setCategory2_id([]);
      setCategory3_id([]);
      setCategory4_id([]);
    }
    for (i in main_Category) {
      if (main_Category[i]?.Main_Category?.name === name) {
        // console.log(main_Category[i].Sub_Category.name)
        for (j in main_Category[i]?.Sub_Category) {
          // console.log("==>2===>",main_Category[i].Sub_Category[j].name)
          category2.push(main_Category[i]?.Sub_Category[j]);
        }
      }
    }
    setCategory2_id(category2);
  };

  //  ========= CATEGORY 3 ============
  const fun_category3 = name => {
    if (category3_id.length !== 0) {
      setCategory3_id([]);
      setCategory4_id([]);
    }
    for (i in category2_id) {
      if (category2_id[i].level_3_category !== undefined) {
        if (category2_id[i]?.name === name) {
          // console.log('3==>', category2_id[i]?.level_3_category);
          category3.push(category2_id[i]?.level_3_category);
        }
      }
    }
    // console.log('==3==>', category3);
    setCategory3_id(category3);
  };
  //  ========== CATEGORY 4 =========
  const fun_category4 = namevar => {
    // cons0ole.log('4======>', category3);
    // console.log('4=>', namevar);
    if (category4_id.length !== 0) {
      setCategory4_id([]);
    }
    for (i in category3_id) {
      // console.log(category3_id[i]?.name);
      if (category3_id[i].level_4_category !== undefined) {
        if (category3_id[i]?.name === namevar) {
          category4.push(category3_id[i]?.level_4_category);
        }
      }
    }
    setCategory4_id(category4);
  };
  // ========== ON SUBMIT ==========
  const create_api = async () => {
    await axios({
      method: 'post',
      url: apiConfig.createticket,
      data: {
        summary: user_Details.summary,
        submitter: user_Details.submitter_name,
        submitteremail: user_Details.submitter_email,
        contact: user_Details.phone_no,
        description: user_Details.description,
        severity: user_Details.severity_id,
        category1: user_Details.category_id,
        tickettype: 'Incident',
      },
      headers: {'content-type': 'application/json'},
    })
      .then(res => {
        if (res?.status === 200) {
          console.log('=====>', res?.data);
          console.log('===>create--------->', res?.data?.IncidentNumber);
          setTicket_No(res?.data?.IncidentNumber);
          setTimeout(() => {
            setModalVisible(true);
          }, 1000);
        }
      })
      .catch(err => {
        console.log('create err', err);
      });
  };

  // =========== Handle change =======
  const handleChange = (name, txt) => {
    console.log('name====>', name);
    console.log('=====>EEE', txt);
    setUser_Details(prevState => ({
      ...prevState,
      [name]: txt,
    }));
  };

  // ======== validation =======
  const validation = () => {
    let flag = true;
    if (user_Details.summary === '') {
      console.log('enter summary');
      handleChange('summary_error', "enter summary'");
      flag = false;
    }
    if (user_Details.submitter_name === '') {
      console.log('enter submitter name');
      handleChange('submitter_name_error', 'enter submitter name');
      flag = false;
    }
    if (user_Details.submitter_email === '') {
      console.log('enter submitter email');
      handleChange('submitter_email_error', 'enter submitter email');
      flag = false;
    }

    if (user_Details.severity_id === '') {
      console.log('enter severity id');
      handleChange('severity_id_error', 'enter severity id');
      flag = false;
    }
    if (user_Details.category_id === '') {
      console.log('enter category');
      handleChange('category_id_error', 'enter category');
      flag = false;
    }
    if (user_Details.description === '') {
      console.log('enter description');
      handleChange('description_Error', 'enter description');
      flag = false;
    }
    if (user_Details.phone_no === '') {
      console.log('enter phone');
      handleChange('phone_no_error', 'enter phone no');
      flag = false;
    }
    return flag;
  };

  // ========= Onchange button =========f
  const onsubmit = () => {
    if (validation()) {
      // console.log('summayr--->', user_Details);
      create_api();
    } else {
      // console.log('please check ');
      // console.log('summayr--->', user_Details);
    }
  };

  //================ USEEFFECT FUNCTION ===========
  useEffect(() => {
    severity_api();
    category_api();
  }, [0]);

  return (
    <View style={{flex: 1}}>
      <Custom_Header
        navigation={navigation}
        Image_icon={Image_Path.BackIcon}
        path={false}
      />
      {/* ========== Create Ticket =========  */}
      <View
        style={{
          // backgroundColor:"red",
          height: 30,
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Create Ticket
        </Text>
        <View
          style={{
            backgroundColor: '#8B8B8B',
            height: 2,
            width: '68%',
            alignSelf: 'center',
          }}></View>
      </View>
      {/* ======================Text Inlut Feilds =============== */}
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: 'space-around',
        }}>
        <KeyboardAwareScrollView>
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Summary:</Text>
            <TextInput
              style={[Style.dropdown, Style.input_feild]}
              placeholder="Enter summary"
              onChangeText={txt => handleChange('summary', txt)}
            />
          </View>
          {user_Details.summary_error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>{user_Details.summary_error}</Text>
            </View>
          ) : null}
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Submitter Name:</Text>
            <TextInput
              style={[Style.dropdown, Style.input_feild]}
              placeholder="submitter name"
              defaultValue={userdata.name}
              onChangeText={txt => handleChange('submitter_name', txt)}
            />
          </View>
          {user_Details.submitter_name_error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>
                {user_Details.submitter_name_error}
              </Text>
            </View>
          ) : null}
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Submitter Email:</Text>
            <TextInput
              placeholder="submitter name"
              style={[Style.dropdown, Style.input_feild]}
              defaultValue={userdata.email}
              onChangeText={txt => handleChange('submitter_email', txt)}
            />
          </View>
          {user_Details.submitter_email_error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>
                {user_Details.submitter_email_error}
              </Text>
            </View>
          ) : null}
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Phone Number:</Text>
            <TextInput
              style={[Style.dropdown, Style.input_feild]}
              placeholder="enter phone no"
              maxLength={10}
              keyboardType="numeric"
              // phone_no
              onChangeText={txt => handleChange('phone_no', txt)}
            />
          </View>
          {user_Details.phone_no_error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>{user_Details.phone_no_error}</Text>
            </View>
          ) : null}
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Severity:</Text>
            {/* ======= SEVERITY DROPDOWN ======== */}
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={severity_Data}
              search
              maxHeight={250}
              labelField="name"
              valueField="id"
              placeholder="- - - - Select Severity - - - -"
              searchPlaceholder="Search here..."
              onChange={item => {
                console.log(item);
                fun_category1();
                handleChange('severity_id', item.ref);
              }}
              renderItem={renderItem}
            />
          </View>
          {user_Details.severity_id_error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>
                {user_Details.severity_id_error}
              </Text>
            </View>
          ) : null}
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Category 1:</Text>
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={category1_id}
              search
              maxHeight={250}
              labelField="name"
              valueField="id"
              placeholder="- - - - Select Category 1 - - - -"
              searchPlaceholder="Search here..."
              onChange={item => {
                console.log(item.name);
                fun_category2(item.name);
                handleChange('category_id', item.id);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Category 2:</Text>
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={category2_id}
              search
              maxHeight={250}
              labelField="name"
              valueField="id"
              placeholder="- - - - Select Category 2 - - - -"
              searchPlaceholder="Search here..."
              onChange={item => {
                console.log(item);
                fun_category3(item.name);
                handleChange('category_id', item.id);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Category 3:</Text>
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={category3_id}
              search
              maxHeight={250}
              labelField="name"
              valueField="id"
              placeholder="- - - - Select Category 3 - - - -"
              searchPlaceholder="Search here..."
              onChange={item => {
                console.log(item);
                fun_category4(item.name);
                handleChange('category_id', item.id);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Category 4:</Text>
            <Dropdown
              style={Style.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={category4_id}
              search
              maxHeight={250}
              labelField="name"
              valueField="id"
              placeholder="- - - - Select Category 4 - - - -"
              searchPlaceholder="Search here..."
              onChange={item => {
                console.log(item.name);
                handleChange('category_id', item.id);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.viewContainer}>
            <Text style={styles.txt}>Description:</Text>
            <TextInput
              style={[Style.dropdown, styles.txtinput1]}
              placeholder="enter description"
              keyboardType="default"
              multiline={true}
              onChangeText={txt => handleChange('description', txt)}
            />
          </View>
          {user_Details.description_Error != null ? (
            <View style={Style.error_View}>
              <Text style={Style.error_txt}>
                {user_Details.description_Error}
              </Text>
            </View>
          ) : null}
          <View style={{height: 100, justifyContent: 'center'}}>
            <TouchableOpacity
              style={Style.button_style}
              onPress={() => {
                // setModalVisible(true)
                onsubmit();
              }}>
              <Text style={Style.button_text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
      {/* =========== Custom Submit =========== */}
      <Custom_Submit
        modalvisible={modalvisible}
        dismiss={() => setModalVisible(false)}
        ticket_name={ticket_no}
      />
    </View>
  );
};

export default Incident_Screen;

const styles = StyleSheet.create({
  viewContainer: {
    minHeight: 85,
    width: '100%',
    justifyContent: 'space-around',
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  txtinput1: {
    height: 120,
    backgroundColor: '#FFFFFF',
    width: '100%',
    fontSize: 14,
    color: '#008080',
    fontFamily: 'Montserrat-Regular',
    textAlignVertical: 'top',
    lineHeight: 23,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#8B8B8B',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#8B8B8B',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: 'black',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
    color: '#8B8B8B',
  },
  error: {
    alignSelf: 'flex-end',
    width: '95%',
    marginTop: -5,
  },
  errortxt: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
});
