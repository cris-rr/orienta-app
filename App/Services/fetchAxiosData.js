
import axios from 'axios';


const fetchAxiosData = async (endPoint, method = 'GET', data = null, options = {}) => {
  // const domain = 'http://192.168.1.27:3010/'
  const domain = 'https://orientabe.onrender.com/'
  const url = domain + endPoint;
  try {
    console.log('in fetchAxiosData', {url, data, options})
    let response
    switch (method) {
      case 'POST':
        response = await axios.post(url, data, options);  
        break;
      default:
        response = await axios(url, data, options)
        break;
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error;
    return { error: 'An error occurred while fetching data. Please try again.' }
  }
};


export default fetchAxiosData;
