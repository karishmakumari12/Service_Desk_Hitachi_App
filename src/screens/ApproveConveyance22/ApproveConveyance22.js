import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Stylesheet from './Stylesheet';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const ApproveConveyance22 = ({navigation}) => {
  // ======> CUSTOM TEXTINTPUT <======

  // const Custom_txtField = props => {
  //   return (
  //     <TextInput
  //       style={Stylesheet.txtInput}
  //       mode="outlined"
  //       outlineColor="#828282"
  //       editable={false}
  //       {...props}
  //     />
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <Custom_Header
        label="Approve Conveyance Charges"
        navigation={navigation}
      />
      <View style={Stylesheet.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Mode'}
            value="Metro"
            onChangeText={() => {}}
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'User Name'}
            value="Chandan"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Date'}
            value="2023-02-01"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'From'}
            value="a"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'To'}
            value="M3657"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Km'}
            value="0"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Km Price'}
            value="20"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Amount'}
            value="30,00"
            right={
              <TextInput.Icon
                icon={() => (
                  <Text style={{fontSize: 14, color: '#ACACAC'}}>Rs</Text>
                )}
              />
            }
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Mgr. Amt'}
            value="30,00"
            right={
              <TextInput.Icon
                icon={() => (
                  <Text style={{fontSize: 14, color: '#ACACAC'}}>Rs</Text>
                )}
              />
            }
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Mananger'}
            value="Pardeep Kumar"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Status'}
            value="Accepted"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Attachment'}
            value="Od.pdf"
            right={
              <TextInput.Icon
                icon={() => (
                  <TouchableOpacity>
                    <Text style={{fontSize: 14, color: '#F12547'}}>View</Text>
                  </TouchableOpacity>
                )}
              />
            }
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ApproveConveyance12')}>
              <LinearGradient
                style={Stylesheet.btnView}
                colors={['#F12547', '#E11A3B', '#CA0929']}>
                <Text style={Stylesheet.txt}>Close</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ApproveConveyance22;
