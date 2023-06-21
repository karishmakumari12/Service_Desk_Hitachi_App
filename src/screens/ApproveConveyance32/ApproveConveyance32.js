import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Stylesheet from './Stylesheet';
import Custom_Header from '../../components/Custom_Header/Custom_Header';

const ApproveConveyance32 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <Custom_Header
        label={'Approve Conveyance Charges'}
        navigation={navigation}
      />
      <View style={Stylesheet.container}>
        <View style={Stylesheet.main}>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <Text style={Stylesheet.txt}>
              Request Id : <Text style={Stylesheet.txt_style}>CR000021411</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Claimed by :{' '}
              <Text style={Stylesheet.txt_style}>Chandan Singh</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Amount : <Text style={Stylesheet.txt_style}>Rs 1000</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Manager Status :{' '}
              <Text style={{color: '#1CE27F', fontFamily: 'GothicA1-SemiBold'}}>
                Approve
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <Text style={Stylesheet.txt}>
              Claim Date : <Text style={Stylesheet.txt_style}>01/02/2023</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Emp Code : <Text style={Stylesheet.txt_style}>M7741</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Claim Status : <Text style={Stylesheet.txt_style}>Applied</Text>
            </Text>
            <Text style={Stylesheet.txt}>
              Finance Status :
              <Text style={{color: '#CA0929', fontFamily: 'GothicA1-SemiBold'}}>
                Pending
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ApproveConveyance32;
