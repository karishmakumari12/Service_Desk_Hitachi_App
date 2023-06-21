import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import Image_Path from '../../constants/Image_Path/Image_Path';
import LinearGradient from 'react-native-linear-gradient';
import Custom_Header from '../../components/Custom_Header/Custom_Header';
import Stylesheet from './Stylesheet';
import DocumentPicker from 'react-native-document-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {httpRequest} from './httpRequest';

const AddLocalConveyance = ({navigation}) => {
  const [val, setVal] = useState(' ');
  const [singleFile, setSingleFile] = useState(' ');
  const [data, setData] = useState({name: ''});

  const Test = () => {
    httpRequest(res => {
      console.log("res", res)
    })
  };
  // ==== PDF Picker Function ====
  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      setSingleFile(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Custom_Header label="Add Local Conveyance" navigation={navigation} />
        <View style={Stylesheet.mainView}>
          <View style={[Stylesheet.line, {alignItems: 'center'}]}>
            <Text style={{color: '#3A3A3A', fontSize: 16}}>
              Conveyance Charges
            </Text>
            <View style={Stylesheet.hline} />
          </View>
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>Travel Date</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="Travel Date"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>From</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="From"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>To</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="To"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>Mode</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="Mode"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>Distance</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="Distance"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
            right={
              <TextInput.Icon
                icon={() => (
                  <Text style={{fontSize: 14, color: '#ACACAC'}}>Km</Text>
                )}
              />
            }
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>Rate</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="Rate"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
          />
          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>Amount</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            // value={val}
            style={Stylesheet.txt_input}
            placeholderTextColor="#ACACAC"
            placeholder="Amount"
            onChangeText={txt => {
              console.log('==>', txt);
            }}
            right={
              <TextInput.Icon
                icon={() => (
                  <Text style={{fontSize: 14, color: '#ACACAC'}}>Rs</Text>
                )}
              />
            }
          />
          {/* <Custom_txtField placeholder="Travel Date" pass={'name'} />
          <Custom_txtField placeholder="From" />
          <Custom_txtField placeholder="To" />
          <Custom_txtField placeholder="Mode" />
          <Custom_txtField placeholder="Distance" />
          <Custom_txtField placeholder="Rate" />
          <Custom_txtField placeholder="Amount" /> */}

          <TextInput
            mode="outlined"
            label={<Text style={{fontSize: 14}}>{'Attach Bill'}</Text>}
            outlineColor="#828282"
            activeOutlineColor="#CC0022"
            textColor="#CC0022"
            value={singleFile}
            editable={false}
            style={[
              Stylesheet.txt_input,
              {
                //   alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
              },
            ]}
            placeholderTextColor="#ACACAC"
            right={
              <TextInput.Icon
                style={{
                  height: 31,
                  width: 89,
                  backgroundColor: 'red',
                  marginLeft: -40,
                }}
                onPress={() => selectFile()}
                icon={() => (
                  <LinearGradient
                    colors={['#F12547', '#E31B3C', '#CA0929']}
                    style={{
                      // backgroundColor: 'red',
                      height: 31,
                      width: 89,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 12, color: '#fff', marginRight: 5}}>
                      Upload
                    </Text>
                    <Image
                      source={Image_Path.uploadfile}
                      style={{height: 12, width: 12}}
                    />
                  </LinearGradient>
                )}
              />
            }
          />

          <View style={Stylesheet.line}>
            <TouchableOpacity onPress={() => console.log(data)}>
              <LinearGradient
                style={Stylesheet.btnview}
                colors={['#C7C7C7', '#898989']}>
                <Text style={Stylesheet.btntxt}>Reset</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('ViewAddLocalConvence')}
              onPress={() => Test()}>
              <LinearGradient
                style={Stylesheet.btnview}
                colors={['#F12547', '#E11A3B', '#CA0929']}>
                <Text style={Stylesheet.btntxt}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddLocalConveyance;
