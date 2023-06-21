import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('LoginEmail', email);
    console.log('LoginEmail', password);
    try {
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          console.log('promise', response);
          if (response) {
            // navigation.navigate('Dashboard', {
            //   email: response.user.email,
            //   uid: response.user.uid,
            // });
            navigation.navigate("Dashboard")
          }
        });
    } catch (err) {
      console.log('bnnnnn', err);
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
          <Text style={style.loginTxt}>Login</Text>
        </View>
        <Image
          style={style.loginIcon}
          source={require('../../assets/images/login_icon.png')}
        />
        <View style={style.nameField}>
          <TextInput
            placeholder="Official Email Id"
            onChangeText={Txt => {
              setEmail(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/email2.png')}
          />
        </View>
        <View style={style.inputField}>
          <TextInput
            placeholder="Password"
            onChangeText={Txt => {
              setPassword(Txt);
            }}
          />
          <Image
            style={style.emailImg}
            source={require('../../assets/images/lock.png')}
          />
        </View>
        <TouchableOpacity onPress={() => handleLogin()} style={style.button1}>
          <Text style={style.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={style.account}>Do not have an account,SignUp here</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={style.rightIcon}
            source={require('../../assets/images/left_down_icon.png')}
          />
          <Image
            style={style.leftIcon}
            source={require('../../assets/images/right_down_icon.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
