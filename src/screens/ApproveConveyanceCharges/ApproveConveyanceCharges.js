import {SafeAreaView, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Stylesheet from './Stylesheet';
import Image_Path from '../../constants/Image_Path/Image_Path';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ApproveConveyanceCharges = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Custom_Header
        label={'Approve Conveyance Charges'}
        navigation={navigation}
      />
      <View style={Stylesheet.main}>
        <Text
          style={{
            fontSize: 15,
            color: '#000',
            marginLeft: 15,
            marginVertical: 8,
            fontFamily: 'GothicA1-Regular',
          }}>
          Search Conveyance Request
        </Text>
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 8,
            height: 39,
            borderRadius: 32,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: '#DADADA36',
            backgroundColor: '#FAFAFA',
            elevation: 1,
          }}>
          <TextInput
            style={{fontSize: 13, color: '#000'}}
            placeholder="Search by Request Id, Emp name, Emp Id"
            placeholderTextColor={'#868686'}
          />
          <Image
            source={Image_Path.SearchIcon}
            style={{height: 20, width: 20}}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ApproveConveyance12')}>
          <View
            style={{
              height: 129,
              margin: 9,
              paddingHorizontal: 10,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#EEEEEE',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text style={Stylesheet.txt}>
                Request Id :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  CR000021411
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Claimed by :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  Chandan Singh
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Amount :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  Rs 1000
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Manager Status :{' '}
                <Text
                  style={{color: '#CA0929', fontFamily: 'GothicA1-SemiBold'}}>
                  Pending
                </Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                // flex: 1,
              }}>
              <Text style={Stylesheet.txt}>
                Claim Date :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  01/02/2023
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Emp Code :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  M7741
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Claim Status :{' '}
                <Text
                  style={{color: '#3A3A3A', fontFamily: 'GothicA1-SemiBold'}}>
                  Applied
                </Text>
              </Text>
              <Text style={Stylesheet.txt}>
                Finance Status :{' '}
                <Text
                  style={{color: '#CA0929', fontFamily: 'GothicA1-SemiBold'}}>
                  Pending
                </Text>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ApproveConveyanceCharges;
