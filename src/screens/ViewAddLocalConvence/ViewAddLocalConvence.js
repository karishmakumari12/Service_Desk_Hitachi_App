import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Stylesheet from './Stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import Image_Path from '../../constants/Image_Path/Image_Path';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {Swipeable} from 'react-native-gesture-handler';

const data = [
  {id: 1, title: 'Car', rs: '1000'},
  {id: 2, title: 'Bike', rs: '0'},
  {id: 3, title: 'Flight', rs: '10,000'},
  {id: 4, title: 'Taxi', rs: '1000'},
  {id: 5, title: 'Metro', rs: '500'},
];
let data2 = [
  {
    id: 1,
    time: '01/01/2023',
    rate: '1,000',
    from: 'Delhi',
    to: 'Gurgaon',
    image: Image_Path.car,
  },
  {
    id: 2,
    time: '01/01/2023',
    rate: '1,000',
    from: 'Delhi',
    to: 'Gurgaon',
    image: Image_Path.taxi,
  },
  {
    id: 3,
    time: '01/01/2023',
    rate: '1,000',
    from: 'Delhi',
    to: 'Gurgaon',
    image: Image_Path.train,
  },
  {
    id: 4,
    time: '01/01/2023',
    rate: '1,000',
    from: 'Delhi',
    to: 'Gurgaon',
    image: Image_Path.bike,
  },
  {
    id: 5,
    time: '01/01/2023',
    rate: '1,000',
    from: 'Delhi',
    to: 'Gurgaon',
    image: Image_Path.metro,
  },
];

const ViewAddLocalConvence = ({navigation}) => {
  const ref = useRef();
  const [data_set, setData_Set] = useState(data2);
  const renderItem = ({item}) => {
    return (
      <View style={Stylesheet.Viewflat}>
        <Text style={Stylesheet.cardtxt}>{item.title}</Text>
        <Text style={Stylesheet.cardtxt}>Rs. {item.rs}</Text>
      </View>
    );
  };
  const OnRight = ind => {
    console.log(ind,"-===>")
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', paddingHorizontal: 10}}
        onPress={() => {
          const fill = data_set.filter(item => item.id !== ind);
          setData_Set(fill);
          console.log(fill)
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    );
  };
  const ViewCard = ({item}) => {
    return (
      <Swipeable
        renderRightActions={() => OnRight(item.id)}
        ref={ref}
      >
        <View style={Stylesheet.detailsView}>
          <View style={Stylesheet.direction}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 58,
                width: 58,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#F2F2F2',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -29,
                marginLeft: -12,
              }}>
              <Image
                source={item.image}
                style={{
                  height: 39,
                  width: 39,
                  // backgroundColor: 'blue',
                }}
              />
            </View>
            <Text style={{fontSize: 12, color: '#000'}}>
              Date : {item.time}
            </Text>
            <Text style={{fontSize: 16, color: '#1CE27F'}}>₹ {item.rate}</Text>
          </View>
          <View style={Stylesheet.direction}>
            <Text style={{fontSize: 11, color: 'rgba(0, 0, 0, 0.51)'}}>
              From
            </Text>
            <Text style={{fontSize: 11, color: 'rgba(0, 0, 0,0.51)'}}>To</Text>
          </View>
          <Image
            style={{
              alignSelf: 'center',
              height: 20,
              width: 50,
              marginTop: -10,
              marginBottom: -10,
            }}
            source={Image_Path.bidirection}
          />
          <View style={Stylesheet.direction}>
            <Text style={{fontSize: 13, color: '#000'}}>{item.from}</Text>
            <Text style={{fontSize: 13, color: '#000'}}>{item.to}</Text>
          </View>
        </View>
      </Swipeable>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Custom_Header label="Add Local Conveyance" navigation={navigation} />
      <View style={Stylesheet.main}>
        <View style={Stylesheet.topView}>
          <Text style={{margin: 11, fontSize: 14, color: '#3D3D3D'}}>
            Total Trips Charges
          </Text>
          <Text
            style={{
              fontSize: 21,
              color: '#1CE27F',
              fontWeight: '800',
              marginRight: 21,
            }}>
            ₹ 5,000
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <FlatList
            extraData={item => item.id}
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <FlatList
          extraData={item => item.id}
          data={data_set}
          renderItem={ViewCard}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
                  style={{alignSelf: 'flex-end', width: 101, height: 45}}>
          <LinearGradient
            style={{
              alignSelf: 'flex-end',
              width: 101,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}
            colors={['#F12547', '#E11A3B', '#CA0929']}>
            <Text style={{color: '#fff', fontSize: 16}}>+Add New</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ViewAddLocalConvence;
