import AsyncStorage from '@react-native-async-storage/async-storage';

const Set_Item = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const Get_Item = async (key, callBackSuccess) => {
  await AsyncStorage.getItem(key).then(value => {
    if (value != null) {
      callBackSuccess(JSON.parse(value));
    }
  });
};

export {Set_Item, Get_Item};
