import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(
      () => {
        setLoading(false);
        navigation.navigate('Stack2');
      },

      3000,
    );
  };
  return (
    <View style={{backgroundColor: 'pink', flex: 1, justifyContent: 'center'}}>
      {loading ? 
        <ActivityIndicator visible={loading} />
       : 
        <View>
          <TouchableOpacity style={styles.btn} onPress={startLoading}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          </View>
      }
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputBackground: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  btn: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 40,
    backgroundColor: 'red',
  },
  btnTxt: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '700',
  },
  placeTxt: {
    alignSelf: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
