import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/categorias/categoria.slice'
import { findAll as findAllProdutos } from '../resources/produtos/produto.slice'
import  ModalProdutos  from './ModalProdutos' 
import  Spinner from 'react-bootstrap/Spinner';
import DropDown from './DropDown';

function Menu({perPage}) {

    const dispatch = useDispatch();

    const { categorias, isLoading, isSuccess } = useSelector((state) => state.categoria);

    const [modalShow, setModalShow] = useState(false);
    const [catId, setCatId] = useState(1);


    useEffect(() => {
        dispatch(findAll({

        }));

    }, [dispatch]);

    if(!isLoading) {
        
    }

    var outrasCategorias = [];
    var primeirasCategorias = categorias;

    if( categorias.length > 5) {
        outrasCategorias = categorias.slice(5);
        primeirasCategorias = categorias.slice(0, 5);
    }

    const showCategoria = (e) => {
        const catId = parseInt(e.target.getAttribute('value'));
        setCatId(catId);
        setModalShow(true);
        dispatch(findAllProdutos({
            apenas_destaques: null,
            nome: null,
            cat_id: catId,
            offset: 0,
            limit: perPage
          }));
    }

    return (
        <nav >
            <ul className="menu-desktop" style={{justifyContent: "center"}}>
                <ModalProdutos
                    id={1} 
                    setModalShow={setModalShow} 
                    modalShow={modalShow} 
                    catId={catId}
                    perPage={perPage}
                />
                {
                    outrasCategorias.length > 0 ? <li>
                            < DropDown 
                                categorias={outrasCategorias} 
                                style={{ marginRight: "5px" }} 
                                showCategoria={showCategoria}
                            />
                        </li> : ''
                }
                
                {
                    primeirasCategorias.map((categoria) => (
                        <li 
                            key={categoria.id} 
                            value={categoria.id} 
                            onClick={ showCategoria }
                        >
                            { categoria.nome }
                        </li>
                    )) 
                }
                
            </ul>
        </nav>
    );
}   

export default Menu;