import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setSignIn, setUserName, setEmployeeId} from '../../redux/actions';
import { Get_Item } from '../../components/GlobalStorage/Custom_Store';

export const HttpRequest = () => {
  const [loader, setLoader] = useState(true);
  const [currentOpen, setCurrentOpen] = useState();
  const [incident, setIncident] = useState();
  const {userName, EmpId, dynamicUrl} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    GetIncident();
    console.log('async api call');
  }, []);

  const GetIncident = () => {

    setLoader(true);
    Get_Item('userDetails', res => {
      // console.log("res", res.empid)
      if (res.empid != null) {
        dispatch(setEmployeeId(res.empid));
        console.log('async api call', res.empid);

        try {
          axios
          .post(
            `${dynamicUrl.getTicket}`,
            {
              empid: res.empid,
              status: 'active',
              action: 'GetTicket',
            },
            {
              headers: {
                Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
                'content-type': 'application/json',
              },
            },
          )
            .then(response => {
              console.log('from api', response.data);
              // setIncident(rev === 'TodaysTicket' ? filter() : response?.data?.Tickets);
              setIncident(response?.data?.Tickets);
              // setIncide(true);
              // console.log("items", response?.data?.Tickets.length)
              setLoader(false);
              setCurrentOpen(response?.data?.Tickets.length);
            })
            .catch(error => {
              console.log(error);
              setLoader(false);
            });
        } catch (error) {
          console.log('error');
          setLoader(false);
        }
      } else {
        dispatch(setEmployeeId('Emp Id'));
      }
    });
  };

  // const GetIncident = () => {
  //   dispatch(setLoader(false));
  //   Get_Item('userDetails', res => {
  //     // console.log("res", res.empid)
  //     if (res.empid != null) {
  //       dispatch(setEmployeeId(res.empid));
  //       console.log('async api call', res.empid);

  //       try {
  //         axios
  //           .post(
  //             'https://z3ye58733c.execute-api.ap-south-1.amazonaws.com/Development/ticketdetails',
  //             {
  //               empid: res.empid,
  //               status: 'active',
  //               action: 'GetTicket',
  //             },
  //             {
  //               headers: {
  //                 Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
  //                 'content-type': 'application/json',
  //               },
  //             },
  //           )
  //           .then(response => {
  //             console.log('from api', response.data);
  //             setIncident(response?.data?.Tickets);
  //             // setIncide(true);
  //             // console.log("items", response?.data?.Tickets.length)
  //             setLoader(true);
  //             setCurrentOpen(response?.data?.Tickets.length);
  //           })
  //           .catch(error => {
  //             console.log(error);
  //             dispatch(setLoader(true));
  //           });
  //       } catch (error) {
  //         console.log('error');
  //         dispatch(setLoader(true));
  //       }
  //     } else {
  //       dispatch(setEmployeeId('Emp Id'));
  //     }
  //   });

  //   return 'hello';
  // };

  return {loader, currentOpen, incident};
};
