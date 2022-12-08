import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const insert = async (data) => {
    const response = await axios.post(
        `${ API_URL }/leads`, 
        data,
        { headers: { 'api_key': API_KEY } }
    );
    return response.data;
}

const leadService = { 
    insert,
}

export default leadService;