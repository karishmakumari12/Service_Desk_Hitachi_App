import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
import Style from '../../Style';
const {height, width} = Dimensions.get('screen');
const Custom_Ticket_Details = props => {
  console.log('===========NAVIGATE', props);
  const [store_all, setStore_All] = useState([]);
  const [ticketno, setTicketno] = useState(props.ticket_no);
  const [indicator, setIndicator] = useState(true);
  // ========= View all tickets Appi calling =====
  const View_all_tickets = async () => {
    await axios({
      method: 'POST',
      url: apiConfig.viewTicket,
      data: {
        ticketNumber: ticketno,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res?.status === 200) {
          console.log(
            '========= list with View details ========',
            res?.data?.ticket_detail,
          );
          setStore_All(res.data.ticket_detail[0]);
          setIndicator(false);
        }
      })
      .catch(err => {
        console.log(err, '==== fail ====');
      });
  };

  useEffect(() => {
    setIndicator(true);
    View_all_tickets();
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          backgroundColor: '#00000090',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={props.dismiss}></TouchableOpacity>
        <View style={styles.main}>
          {/* ============ ACTIVITY INDICATOR ============= */}
          {indicator === true ? (
            <ActivityIndicator
              size="large"
              color="#04222C"
              animating={indicator}
              style={{alignSelf: 'center'}}
            />
          ) : (
            <View>
              <ScrollView>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Ticket Number:</Text>
                    <Text style={styles.txt1}>{store_all.ticketnumber}</Text>
                  </View>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Summary:</Text>
                    <Text style={styles.txt1}>{`${store_all.summary}`}</Text>
                  </View>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Status:</Text>
                    <Text style={styles.txt1}>{store_all.status}</Text>
                  </View>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Category:</Text>
                    <Text style={styles.txt1}>{store_all.category}</Text>
                  </View>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Create Data:</Text>
                    <Text style={styles.txt1}>
                      {new Date(store_all.created).toLocaleString()}
                    </Text>
                  </View>
                  <View style={styles.boxview}>
                    <Text style={styles.txt}>Modified Date:</Text>
                    <Text style={styles.txt1}>
                      {new Date(store_all.modified).toLocaleDateString()}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 100,
                      alignContent: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={props.dismiss}
                      style={Style.button_style}>
                      <Text style={Style.button_text}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
export default Custom_Ticket_Details;
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#E7E7E7',
    height: '60%',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  boxviewboxview: {
    minHeight: 50,
    justifyContent: 'space-around',
    width: '100%',
  },
  txt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  txt1: {
    color: '#8B8B8B',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    // backgroundColor:"red",
    width: '100%',
    // height:"100%"
  },
});
