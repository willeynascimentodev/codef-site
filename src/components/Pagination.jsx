import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import { findAll, reset } from '../resources/produtos/produto.slice'


function Pag({total, perPage, catId}) {
    
    const { searchProduto, skip } = useSelector((state) => state.produto);

    const active = skip > 0 ? Math.ceil(skip/perPage) + 1: 1;

    const dispatch = useDispatch();

    const changePage = (e) => {

        const pag = parseInt(e.target.getAttribute('value'));

        const params = {
            apenas_destaques: null,
            nome: searchProduto,
            cat_id: catId ? catId : null,
            offset: !pag ? 0 : (pag * perPage) - perPage,
            limit: perPage,
        }
        
        dispatch(reset);
        dispatch(findAll(params));
        
    }

    const items = [];
    
    for (let number = 1; number <= Math.ceil(total/perPage); number++) {
        items.push(
            <Pagination.Item value={number} key={number} active={number === active} onClick={changePage}>
                {number}
            </Pagination.Item>,
        );
    }
    
  return (
    <div>
        <Pagination>
            {items}
        </Pagination>
    </div>
  );
}

export default Pag;