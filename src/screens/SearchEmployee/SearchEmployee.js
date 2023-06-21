import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Stylesheet from './Stylesheet';
import Image_Path from '../../constants/Image_Path/Image_Path';

const SearchEmployee = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={Stylesheet.topContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Image_Path.Menu_Icon} style={Stylesheet.icon_view} />
        </TouchableOpacity>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={Stylesheet.radius}>
            <Image
              style={{
                height: 60,
                width: 60,
                //backgroundColor: 'red',
              }}
              source={Image_Path.User_Picture}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: '#3A3A3A', fontFamily:"GothicA1-SemiBold"}}>Hello, Username</Text>
        </View>
      </View>
      <View style={{margin: 20}}>
        <Text style={{fontSize: 15, color: '#000', fontFamily:"GothicA1-Regular"}}>Search Employees</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            height: 40,
            borderRadius: 32,
            paddingHorizontal: 10,
            alignItems: 'center',
            elevation: 3,
            marginVertical: 10,
          }}>
          <TextInput
            style={{fontSize: 13, color: '#000'}}
            placeholderTextColor={'#868686'}
            placeholder="Search by employee name, emp code, mail id"
          />
          <TouchableOpacity>
            <Image
              source={Image_Path.SearchIcon}
              style={{height: 16, width: 16}}
            />
          </TouchableOpacity>
        </View>
        <View style={Stylesheet.flatlist}>
          <Image
            style={{
              height: 60,
              width: 60,
              marginRight: 15,
            }}
            source={Image_Path.User_Picture}
          />
          <View>
            <Text style={[Stylesheet.txt, {fontSize: 13}]}>
              Anuj Dogra (M7741)
            </Text>
            <Text style={[Stylesheet.txt, Stylesheet.size]}>
              Designation <Text style={{fontFamily:"GothicA1-Regular"}}>: Technical Engineer</Text>
            </Text>
            <Text style={[Stylesheet.txt, Stylesheet.size]}>
              Mob No. <Text style={{fontFamily:"GothicA1-Regular"}}>: +91 1234567890</Text>
            </Text>
            <Text style={[Stylesheet.txt, Stylesheet.size]}>
              Email Id <Text style={{fontFamily:"GothicA1-Regular"}}>: Anuj.dogra.gx@hitachi-systems.com</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SearchEmployee;
