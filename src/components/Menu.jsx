import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/categorias/categoria.slice'
import  Spinner from 'react-bootstrap/Spinner';
import DropDown from './DropDown';

function Menu() {

    const dispatch = useDispatch();

    const { categorias, isLoading, isSuccess } = useSelector((state) => state.categoria);


    useEffect(() => {
        dispatch(findAll());
    }, [dispatch]);

    if(isLoading) {
        <Spinner/>
    }

    var outrasCategorias = [];
    var primeirasCategorias = categorias;

    if( categorias.length > 5) {
        outrasCategorias = categorias.slice(5);
        primeirasCategorias = categorias.slice(0, 5);
    }

    // primeirasCategorias[4] = 'Teste'
    

    return (
        <nav >
            <ul className="menu-desktop">
                {
                    outrasCategorias.length > 0 ? <li>
                            < DropDown categorias={outrasCategorias} style={{ marginRight: "5px" }} />
                        </li> : ''
                }
                
                {
                    primeirasCategorias.map((categoria) => (
                        <li key={categoria.id}>{ categoria.nome }</li>
                    )) 
                }
                
            </ul>
        </nav>
    );
}   

export default Menu;