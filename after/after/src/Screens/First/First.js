import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';


const First = ({navigation}) => {
    const [records, setRecords] = useState([])
//   const [name, setName] = useState('');
//   const [course, setCourse] = useState('');

useEffect(()=>{
    // const value = AsyncStorage.getItem('TASKS');
    // console.log("value: ", value)
    
},[])
console.log("records: ", records)
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.placeHolder}
        onChangeText={txt => {
            setRecords([{...records, name: txt}]);
        }}
        placeholder="please enter your name"
      />
      <TextInput
        style={styles.placeHolder}
        onChangeText={txt => {
            setRecords([{...records,course: txt}]);
        }}
        placeholder="please enter your course"
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Second', {
            records:records
          })
        }
        style={styles.button}>
        <Text>save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
  placeHolder: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    // alignItems:'center',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  button: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign:'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
});
