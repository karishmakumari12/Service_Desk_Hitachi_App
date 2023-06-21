import axios from 'axios';

export async function httpRequest() {
  try {
    await axios({
      method: 'post',
      url: 'https://8aj3hddov3.execute-api.ap-south-1.amazonaws.com/Production/fetch-local-conveyance',
      data: {
        action: 'GetLocalConveyance',
        emp_id: 'M7839'
      },
      headers: {
        Authorization: 'dd8dd1b04fd944ae89553c4aedc6b224a70b7dce',
        'content-type': 'application/json',
      },
    })
      .then(response => {
        console.log('get claim list response', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
