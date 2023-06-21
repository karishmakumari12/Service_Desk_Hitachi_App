import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Dashboard = ({navigation}) => {
  const [down, setDown] = useState(false);
console.log("==>", navigation)
  return (
    <View style={style.mainContainer}>
    
      <View style={style.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
          onPress={()=> navigation.openDrawer()}
          >
          <Image
            style={style.sideBar}
            source={require('../../assets/images/sidebar.png')}
          />
          </TouchableOpacity>
          <Text style={style.dashboard}>Dashboard</Text>
          <Image
            style={style.notification}
            source={require('../../assets/images/notification.png')}
          />
        </View>
        <Image
          style={style.profile}
          source={require('../../assets/images/profile.png')}
        />
      </View>

      {/* ==========header complete============= */}

      <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
        <TouchableOpacity
          onPress={() => {
            // bgColor2();
          }}>
          <View
            style={[
              style.heightImg,
              {backgroundColor: down ? '#032046' : 'white'},
            ]}>
            <TouchableOpacity
              onPress={() => {
                down ? setDown(false) : setDown(true);
              }}>
              <Image source={require('../../assets/images/down.png')} />
            </TouchableOpacity>
            {down ? (
              <View style={{justifyContent: 'space-between', height: 80}}>
                <Image
                  style={style.home}
                  source={require('../../assets/images/homewhite.png')}
                />
                <Image
                  style={style.buldingImg}
                  source={require('../../assets/images/bulding.png')}
                />
              </View>
            ) : null}
          </View>
        </TouchableOpacity>

        <View style={style.johnTop}>
          <Text style={style.johnTxt}>John Deo</Text>
          <Text style={style.ux}>UI/UX Designer</Text>

          <Text style={style.time}>09:12AM</Text>
          <Text style={style.day}>wednesday, July 22</Text>
        </View>
        <View style={style.emptyHeightImg}></View>
      </View>

      {/* ===========john Deo text complete====================== */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: 'transparent',
            alignSelf: 'flex-end',
            height: height / 17,
            width: width / 8,
            // backgroundColor:"red"
          }}></View>
        <View style={style.circle}>
          <Text style={style.circleTime}>09:00</Text>
          <Text style={style.circleTime}>shift Time</Text>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Image
            style={style.timer}
            source={require('../../assets/images/timmerrun.png')}
          />
        </View>
      </View>
      {/* ==================== circle Shift time complete====== */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <Image
          style={style.location}
          source={require('../../assets/images/location.png')}
        />
        <Text style={style.sweetBall}>Location:Sweetball business center</Text>
      </View>
      {/* =====Location complete============= */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          paddingHorizontal: 60,
          marginTop: 40,
        }}>
        <View>
          <Image
            style={style.checkIn}
            source={require('../../assets/images/checkin.png')}
          />
          <Text>02:10</Text>
        </View>

        <View>
          <Image
            style={style.checkOut}
            source={require('../../assets/images/checkout.png')}
          />
          <Text>07:10</Text>
        </View>
        <View>
          <Image
            style={style.workingHrs}
            source={require('../../assets/images/workinghrs.png')}
          />
          <Text>09:12</Text>
        </View>
      </View>
      {/* ===========watches complete ==================== */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          paddingHorizontal: 60,
          marginTop: 40,
        }}></View>
    </View>
  );
};

export default Dashboard;
