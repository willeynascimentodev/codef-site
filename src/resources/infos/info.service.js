import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const findAll = async (data) => {
    const response = await axios.get(
        `${ API_URL }/infos/1`, 
        { headers: { 'api_key': API_KEY } }
    );
    return response.data;
}

const infoService = { 
    findAll,
}

export default infoService;