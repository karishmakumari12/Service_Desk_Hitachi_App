import {SafeAreaView, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Stylesheet from './Stylesheet';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {TextInput} from 'react-native-paper';
import Image_Path from '../../constants/Image_Path/Image_Path';
// import DatePicker from 'react-native-datepicker';
import {httpRequest} from './httpRequest';
const ClaimLocalConveyance = ({navigation}) => {
  // useEffect(() => {
  //   httpRequest();
  // }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Custom_Header label="Claim Local Conveyance" navigation={navigation} />
        <View style={Stylesheet.mainView}>
          <Text style={{fontSize: 14, color: '#676767', lineHeight: 25}}>
            " I do hereby certify that the information (including vouchers /
            invoices / supporting documents) provided here in above is true,
            complete, no personal expenses has been claimed. Any false
            information contained herein may constitute ground(s) for any action
            taken by Hitachi Systems India Private Limited which it deems fit "
          </Text>
          <TextInput
            mode="outlined"
            label={'Select Month'}
            placeholder="Select"
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            editable={false}
            textColor="#CC0022"
            style={{
              height: 45,
              fontSize: 14,
              marginVertical: 2,
            }}
            value=" "
            placeholderTextColor="#ACACAC"
            right={
              <TextInput.Icon
                onPress={() => console.log('=== claim local convaynace>')}
                icon={() => (
                  <Image
                    style={{height: 7, width: 12}}
                    source={Image_Path.downarrow}
                  />
                )}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ClaimLocalConveyance;
