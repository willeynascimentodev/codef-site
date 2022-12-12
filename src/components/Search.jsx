import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { findAll, reset } from '../resources/produtos/produto.slice'

function Search ({perPage, catId}) {
    const [search, setSearch] = useState('');
    
    const dispatch = useDispatch()

    const change = (e) => {
        setSearch(e.target.value);
    }

    const searchFunction = () => {
        
        dispatch(reset);
        const params = {
            apenas_destaques: search,
            nome: search,
            cat_id: catId ? catId : null,
            offset: 0,
            limit: perPage,

        }

        dispatch(findAll(params));
    }

    return (
        <div className="search row mb-5 mt-2 p-2" >
            <input 
                id="input-pesquisa"
                className="form-control text-center p-2" 
                type="text" 
                placeholder="Digite o nome do produto..."
                onChange={ change }
                onKeyUp={ searchFunction }
                style={{display: "blck", margin: "auto"}}
            />
        </div>
    )
}

export default Search;


        