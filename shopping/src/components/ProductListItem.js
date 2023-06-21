import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import apiConfig from '../Config/apiConfig';
import constants from '../constants/images';

const ProductListItem = props => {
  // console.log(props);
  const {data, onPress} = props;
  console.log('DATA', data);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.mainContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'http://54.173.143.207:8000/media/productimage/2023/03/24/06/22/02/sliper2.webp',
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{marginStart: 20}}>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={styles.otherData}>{data.brand}</Text>
      </View>
       
        <Text style={styles.otherData}>men Leather Sneakers</Text>
        <Text style={styles.otherData}>{data.price}</Text>
        <Text style={styles.name}>Best Prices 7,356 with coupon</Text>
        <Text style={styles.name}>Delevery by Apr 14</Text>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.otherData}>Size:{data.size}</Text>

        <Text style={styles.otherData}>Title:{data.title}</Text>
        <Text style={styles.otherData}>Brand:{data.brand}</Text>
        <Text style={styles.otherData}>Price:{data.price}</Text>
      </View>
      <SafeAreaView />
    </TouchableOpacity>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  image: {
    height: 105,
    width: 105,

    overflow: 'hidden',
    // tintColor:'pink',
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  otherData: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
});
