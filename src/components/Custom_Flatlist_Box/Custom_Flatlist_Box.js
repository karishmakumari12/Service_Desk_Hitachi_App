import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  useWindowDimensions
} from 'react-native';
import React from 'react';
import Stylesheet from './Stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import RenderHTML from 'react-native-render-html';
const Custom_Flatlist_Box = ({item, index, navigation}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  // console.log('Custom_Flatlist_Box', item);
  const source = {
    html: `
  ${item?.description}`
  };

  return (
    <Animated.View style={Stylesheet.card_DetailsView} key={index}>
      <View style={Stylesheet.cardViewLine2}>
        <Text
          style={{
            fontSize: 12,
            color: 
             item.severit === 'Severity1' ? '#FF163D' :
              item.severit === 'Severity2' ? '#F59B44' :
              item.severit === 'Severity3' ? '#F6D537' :
              item.severit === 'Severity4' ? '#2FEA8D' :'#FEB773'
          ,
            fontFamily: 'GothicA1-Regular',
          }}>
            {/* <Text
          style={{
            fontSize: 5,
            color: '#FF163D',
            fontFamily: 'GothicA1-Regular',
          }}>
         {'\u2B24'}
        </Text> */}
          {item?.severit}
        </Text>
        <Text
          style={{
            fontSize: 5,
            color: '#FF163D',
            fontFamily: 'GothicA1-Regular',
            marginTop: 5,
            marginLeft: 5
          }}>
         {'\u2B24'}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#FF163D',
            fontFamily: 'GothicA1-Regular',
          }}>
          {' '}
           {item?.status}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 5,
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            color: '#000000',
            marginBottom: 10,
            fontFamily: 'GothicA1-Bold',
          }}>
          {item?.summary}
        </Text>
      </View>

      {/* <View
        style={{
          flex: 1,
          marginTop: 5,
        }}>
         
         
        <Text
          numberOfLines={1}
          style={{
            fontSize: 12,
            color: '#757575',
            fontFamily: 'GothicA1-Regular',
          }}>
          {item?.description}
         
        </Text>
      </View> */}

      <View style={Stylesheet.cardViewLine}>

        <View
          style={{
            // flex: 1,
            // backgroundColor: 'blue',
            width: 160,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontFamily: 'GothicA1-Regular',
              color: '#000000',
            }}>
            Submitted By :
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                color: '#757575',
                fontFamily: 'GothicA1-Regular',
                marginLeft: 10,
              }}>
              {item?.submitter_name}
            </Text>
          </Text>
        </View>

        <View
          style={{
            // flex: 1,
            // backgroundColor: 'blue',
            width: 140,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              color: '#000000',
              fontFamily: 'GothicA1-Regular',
            }}>
            Created date :
            <Text
              style={{
                fontSize: 12,
                color: '#757575',
                fontFamily: 'GothicA1-Regular'
              }}>
              {moment(item?.created).format('DD/MM/YY')}
            </Text>
          </Text>
        </View>

      </View>

      <View style={Stylesheet.cardViewLine}>
        <View
         style={{
          // flex: 1,
          // backgroundColor: 'blue',
          width: 140,
        }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              color: '#000000',
              fontFamily: 'GothicA1-Regular',
            }}>
            Organisation :
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                color: '#757575',
                fontFamily: 'GothicA1-Regular',
                marginLeft: 10,
              }}>
              {item.organisation == null ? 'NA' : item.organisation}
            </Text>
          </Text>
        </View>
        <View
         style={{
          // flex: 1,
          // backgroundColor: 'blue',
          width: 140,
        }}
        >
          <Text
          numberOfLines={1}
            style={{
              fontSize: 12,
              color: '#000000',
              fontFamily: 'GothicA1-Regular',
            }}>
            Category:
            <Text style={{fontSize: 12, color: '#444444'}}>
              {item?.category}
            </Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
      onPress={() => navigation.navigate('UpdateScreen',item)}
        style={{
          backgroundColor: '#CC0022',
          alignSelf: 'flex-end',
          paddingHorizontal: 15,
          paddingVertical: 5,
          marginTop: 10,
          borderRadius: 32,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: '#ffffff',
            fontFamily: 'GothicA1-Regular',
          }}>
          Details
        </Text>
        {/* <Icon name="chevron-forward" size={10} color="#FFFFFF" /> */}
        <Image
          style={{
            width: 5,
            height: 8,
            marginLeft: 5,
          }}
          source={require('../../assets/images/rightIcon.png')}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Custom_Flatlist_Box;

const styles = StyleSheet.create({});
