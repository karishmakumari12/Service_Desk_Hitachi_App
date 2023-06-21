import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const ProductDeatals = ({navigation, route}) => {
  const data = route.params.data;
  useEffect(() => {
    console.log('========================>', route.params.data);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text>dskjhwkj</Text>
      <Text>sdnsd</Text>
      <Text>sdfbdsjf</Text>
      <Text>scnsdjkfn</Text>
    </View>
  );
};

export default ProductDeatals;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topImage: {
    height: 200,
    width: '100%',
  },
});
