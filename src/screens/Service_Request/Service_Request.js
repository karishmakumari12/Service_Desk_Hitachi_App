import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Image_Path from '../../constants/Image_Path/Image_Path';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Custom_Submit from '../../components/Custom_Submit/Custom_Submit';
const Service_Request = (props) => {
  console.log("props  details",props.route.params)
  const navigation = useNavigation();
  const [modalvisible,setModalVisible]=useState(false);
  const [userdata,setUserData]=useState(props.route.params.Details);
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{color: '#1a1a1a', fontSize: 20}}>Create Tickets</Text>
        <View
          style={{
            backgroundColor: '#404040',
            height: 2,
            width: '65%',
            alignSelf: 'center',
          }}></View>
      </View>
      {/* ======================Text Input Feilds =============== */}
      <View
        style={{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        justifyContent:"space-around"}}>
          <KeyboardAwareScrollView>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Submitter Name:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'
            value={userdata.name}/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Submitter Email:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'
            value={userdata.email}/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Phone Number:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='Enter Phone no'
            maxLength={10}
            keyboardType='numeric'
            />
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Severity:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Request Type:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Change for Reason</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'
            keyboardType='default'
            />
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Category 1:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Category 2:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Category 3:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Category 4:</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'/>
          </View>
          <View
          style={styles.viewContainer}>
            <Text style={styles.txt}>Description</Text>
            <TextInput 
            style={styles.txtinput}
            placeholder='submitter name'
            multiline={true}
            keyboardType='default'/>
          </View>
          <TouchableOpacity style={styles.button}
          onPress={()=>setModalVisible(true)}>
            <Text
            style={styles.btnStyle}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        </View>
         {/* =========== Custom Submit =========== */}
         <Custom_Submit
        modalvisible={modalvisible}
        dismiss={() => setModalVisible(false)}
        />
    </View>
  );
};

export default Service_Request;

const styles = StyleSheet.create({
 viewContainer:{
    minHeight:85,
    width:"100%",
    justifyContent:"space-around",
  },
  txt:{
    color:"black", 
    fontSize:16,
    fontWeight:"600"
  },
  txtinput:{
    borderWidth:1,
    borderRadius:3,
    borderColor:"#404040",
    paddingLeft:10,
    // backgroundColor:"green",
    minHeight:50,
    width:"100%",
    fontSize:15,
    color:"#008080",
    fontWeight:"600"
  },
  button:{
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems:"center",
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
    backgroundColor: '#04aeba',
    marginBottom:20,
    marginTop:10
  },
  btnStyle: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
});
