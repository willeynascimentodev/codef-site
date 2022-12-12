import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const findAll = async (data) => {
    var apenasDestaques = data.apenas_destaques ? data.apenas_destaques : null;
    var nome = data.nome ? data.nome : null;
    var offset = data.offset ? data.offset : null;
    var limit = data.limit ? data.limit : null;
    var catId = data.cat_id ? data.cat_id : null

    const response = await axios.get(
        `${ API_URL }/produtos?apenas_destaques=${apenasDestaques}&nome=${nome}&offset=${offset}&limit=${limit}&cat_id=${catId}`, 
        { headers: { 'api_key': API_KEY } }
    );
    return response.data;
}

const produtoService = { 
    findAll,
}

export default produtoService;