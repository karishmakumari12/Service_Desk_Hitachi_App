import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HelperText} from 'react-native-paper';
import style from './style';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameErr, setFirstNameErr] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameErr, setLastNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmaiErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [mobile, setMobile] = useState('');
  const [mobileErr, setMobileErr] = useState('');

  //============================Regex======================
  var empid_regex = /^[0-9a-zA-Z]+$/;
  var Password_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  //==========================First Name====================
  const name_validation = txt => {
    if (txt === '') {
      setFirstNameErr('please enter first name');
    } else {
      setFirstNameErr(null);
    }
  };

  //==========================Last Name====================
  const last_name = txt => {
    if (txt === '') {
      setLastNameErr('please enter password');
    } else if (!lastName) {
      setLastNameErr('plese enter valid password');
    } else {
      setLastNameErr(null);
    }
  };

  //==========================Email====================
  const emailVal = txt => {
    if (txt === '') {
      setEmaiErr('please enter email');
    } else {
      setEmaiErr(null);
    }
  };

  //==========================Mobile Number====================
  const mobileVal = txt => {
    if (txt === '') {
      setMobileErr('please enter password');
    } else {
      setMobileErr(null);
    }
  };

  //==========================Password====================
  const pass = txt => {
    if (txt === '') {
      setPasswordErr('please enter password');
    } else if (!Password_regex.test(txt) || txt.length < 2) {
      setPasswordErr('plese enter valid password');
    } else {
      setPasswordErr(null);
    }
  };

  //===============All Field Validation================
  const Validation = () => {
    if (firstName === '') {
      setFirstNameErr('Field can not empty');
    } else if (lastName === '') {
      setLastNameErr('Field can not empty ');
    } else if (email === '') {
      setEmaiErr('Field can not empty ');
    } else if (mobile === '') {
      setMobileErr('Field can not empty ');
    } else if (password === '') {
      console.log('==============>pass3');
      setPasswordErr('Field can not empty');
    } else {
      return true;
    }

    // if (password === '') {
    //   console.log('==============>pass3');
    //   setPasswordErr('Field can not empty');
    // } else if (){
    //   return true;
    // }
  };

  // =============== Submit =============
  const onSubmit = () => {
    console.log('=====dd======>', Validation());

    if (Validation()) {
      console.log('=====if======>');
      navigation.navigate('Login');
    } else {
      // navigation.navigate('Login');
      console.log('=====else======>');
    }
  };
  //=========================auth================
  const handle = async () => {
    console.log('====Email=====>', email);
    console.log('====Password=====>', password);
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      navigation.navigate('Login');

      console.log('abc', isUserCreated);
    } catch (err) {
      console.log('from catch', err);
    }
  };
  return (
    <ScrollView>
      <View style={style.mainContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Image
              style={style.backgraounArrow}
              source={require('../../assets/images/backgraoundArrow.png')}
            />
          </View>
          <Text style={style.loginTxt}>Signup</Text>
        </View>

        <Image
          style={style.loginIcon}
          source={require('../../assets/images/login_icon.png')}
        />

        <View style={style.nameField}>
          <TextInput
            placeholder="First Name"
            onChangeText={Txt => {
              setFirstName(Txt), name_validation(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/user1.png')}
          />
        </View>
        <HelperText>
          {firstNameErr !== null ? (
            <Text style={style.errorText}>{firstNameErr}</Text>
          ) : null}
        </HelperText>
        <View style={style.inputField}>
          <TextInput
            placeholder="Last Name"
            onChangeText={Txt => {
              setLastName(Txt), last_name(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/user1.png')}
          />
        </View>
        <HelperText>
          {lastNameErr !== null ? (
            <Text style={style.errorText}>{lastNameErr}</Text>
          ) : null}
        </HelperText>
        <View style={style.inputField}>
          <TextInput
            placeholder="Office Email Id"
            onChangeText={Txt => {
              setEmail(Txt), emailVal(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/email2.png')}
          />
        </View>
        <HelperText>
          {emailErr !== null ? (
            <Text style={style.errorText}>{emailErr}</Text>
          ) : null}
        </HelperText>

        <View style={style.inputField}>
          <TextInput
            placeholder="Mobile Number"
            onChangeText={Txt => {
              setMobile(Txt), mobileVal(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/mobile.png')}
          />
        </View>
        <HelperText>
          {mobileErr !== null ? (
            <Text style={style.errorText}>{mobileErr}</Text>
          ) : null}
        </HelperText>
        <View style={style.inputField}>
          <TextInput
            placeholder="Password"
            onChangeText={Txt => {
              setPassword(Txt), pass(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/lock.png')}
          />
        </View>
        <HelperText>
          {passwordErr !== null ? (
            <Text style={style.errorText}>{passwordErr}</Text>
          ) : null}
        </HelperText>
        <TouchableOpacity style={style.button1} onPress={() => handle()}>
          <Text style={style.btnTxt}>SignUp</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ImageBackground
            style={style.rightIcon}
            source={require('../../assets/images/left_down_icon.png')}
          />
          <ImageBackground
            style={style.leftIcon}
            source={require('../../assets/images/right_down_icon.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
