import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function httpRequest() {
  // const conveyanceData = {
  //   Bus: {
  //     price: 10,
  //   },
  //   Car: {
  //     price: 20,
  //   },
  //   Taxi: {
  //     price: 30,
  //   },
  //   Train: {
  //     price: 40,
  //   },
  //   Bike: {
  //     price: 50,
  //   },
  // };

  try {
    await axios({
      method: 'post',
      url: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/add-local-conveyance',
      data: {
        EmpCode: 'M7839',
        travelDate: '23-02-2022',
        from: 'mayur vihar',
        to: 'okhla',
        Mode: 'Bike',
        distance: '10',
        rate: '4',
        ammount: '40',
        action: 'AddLocalConveyance',
      },
      headers: {
        Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
        'content-type': 'application/json',
      },
    })
      .then(response => {
        console.log('response', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
