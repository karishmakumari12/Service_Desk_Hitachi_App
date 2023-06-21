import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Stylesheet from './Stylesheet';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Custom_Modal from '../../components/Custom_Modal/Custom_Modal';
const ApproveConveyance12 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
            label={'Request ID'}
            value="CR000021411"
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
            label={'Emp. Code'}
            value="M7741"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Mgr. Name'}
            value="Mgr. Name"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Mgr. Code'}
            value="M3657"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Claim Status'}
            value="Applied"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Claim Date'}
            value="2023-02-01"
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
            label={'Finance Amt'}
            value="0.00"
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
            label={'Mananger Status'}
            value="Pending"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Finence Status'}
            value="Pending"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Playment Status'}
            value="pending"
          />
          <TextInput
            style={Stylesheet.txtInput}
            mode="outlined"
            outlineColor="#828282"
            editable={false}
            label={'Approved Mgr. code'}
            value="M3657"
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ApproveConveyance22')}>
              <LinearGradient
                style={Stylesheet.btnView}
                colors={['#BCBCBC', '#727272']}>
                <Text style={Stylesheet.txt}>View Details</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <LinearGradient
                style={Stylesheet.btnView}
                colors={['#F12547', '#E11A3B', '#CA0929']}>
                <Text style={Stylesheet.txt}>Approve</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {modalVisible ? (
        <Custom_Modal
          modalvisible={modalVisible}
          title={
            'You have successfully approved Local         Conveyance Request.'
          }
          onDismiss={() => {
            setModalVisible(false);
            navigation.navigate('ApproveConveyance32');
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};
export default ApproveConveyance12;
