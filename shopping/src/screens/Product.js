import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Data from '../store/Data';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';
export default Product = ({navigation}) => {
  const [productDetails, setProductDetail] = useState('');
  useEffect(() => {
    getUserData();
    return;
  }, []);

  //=========================Api Method ================================
  const getUserData = async () => {
    await axios({
      method: 'GET',
      url: 'http://54.173.143.207:8000/product',

      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        setProductDetail(res.data.results);
        console.log('responce', res.data.results);
      })
      .catch(err => {
        console.log(err, 'wrong othentication');
      });
  };
  const _renderItem = ({item, index}) => {
    console.log("renderItem",item);
    return (
      <View>
        <ProductListItem
          data={item}
          onPress={() => {
            navigation.navigate('ProductDeatals', {data: item});
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={productDetails}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// export default Product;

const styles = StyleSheet.create({
  mainContainer: {},
});
