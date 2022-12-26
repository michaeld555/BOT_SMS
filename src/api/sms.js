import axios from 'axios';
import dotenv from 'dotenv';
import { useState } from '../utils/config.js';

dotenv.config();

const getQuantityNumbers = (service) => {

    const [data, setData] = useState(null);

    axios.get('https://api.sms-activate.org/stubs/handler_api.php', {
        params: {
            api_key: process.env.API_SMS_KEY,
            action: 'getNumbersStatus',
            country: 73
        }
    })
    .then(response => {
        setData(response);
    })

    //console.log(data);
    return data;

}

export { getQuantityNumbers };