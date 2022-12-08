import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const findAll = async (data) => {
    var apenas_destaques = data.apenas_destaques ? data.apenas_destaques : false;
    var nome = data.nome ? data.nome : '';

    const response = await axios.get(
        `${ API_URL }/produtos?apenas_destaques=${apenas_destaques}&nome=${nome}`, 
        { headers: { 'api_key': API_KEY } }
    );
    return response.data;
}

const produtoService = { 
    findAll,
}

export default produtoService;