import { StyleSheet, Text, View,FlatList ,Dimensions} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import apiConfig from '../../config/apiConfig';
const {height,width}=Dimensions.get("screen");

const Custom_Flatlist = (props) => {
    console.log("======>", props)
    const [ticketlist, setTicketList] = useState([]);
    const [empid,setEmpId]=useState(props.details.emp_id);
    const [status,setStatus]=useState(props.check);
    const [nodata,setNoData]=useState("");
    console.log(status,empid);
    var sno = 0;
    // ======== API CALLING =====
  const Ticket_list_Api = async () => {
    await axios({
      method: 'POST',
      url: apiConfig.getTicket,
      data: {
        empid: empid,
        status: status,
      },
      headers: {
        'Content-Type': 'applicatrion/json',
      },
    })
      .then(res => {
        if (res?.status === 200) {
          if(res?.data?.Tickets[0]===undefined){
             setNoData("No tickets ") ;
             console.log("======No tickets")          }
          else{
          setTicketList(res?.data?.Tickets);
          console.log("======No tickets else") 
          }
        }})
      .catch(err => {
        console.log(err, '==== fail ====');
      });
  };
    // ====== CALLING API WHEN PAGE RELOAD ======
    useEffect(() => {
        Ticket_list_Api();
      }, []);
  return (
    <View>{
      nodata!==""?
           (<Text
            style={{color:"#610b03", 
            fontSize:20,
            textAlign:"center",
            paddingTop:20,
            fontWeight:"600"
          }}>
          {nodata}</Text>):
        (<FlatList
            data={ticketlist}
            renderItem={({item, index}) => {
              sno = sno + 1;
              return (
                <View style={styles.flatcontainer}>
                  <View style={styles.flatitems}>
                    <Text style={[{width: width * 0.15, color: '#000000', marginLeft:10},styles.color_sty]}>
                    {`${index + 1}.`}
                    </Text>
                    <Text style={[{width: width * 0.25, color: '#a10702'},styles.color_sty]}>
                      {item.ticketnumber}
                    </Text>
                    <Text style={[{width: width * 0.25, color: '#000000'},styles.color_sty]}>
                     {item.status}
                    </Text>
                  </View>
                </View>
              );
            }}
          />)}
    </View>
  )
}

export default Custom_Flatlist
const styles = StyleSheet.create({
    flatcontainer: {
        // backgroundColor:"yellow",
        height:70,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      flatitems: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: "95%",
        alignItems: 'center',
        borderRadius: 3,
      },
      color_sty:{
        fontSize:14,
        fontFamily: 'Montserrat-SemiBold',
      }
})