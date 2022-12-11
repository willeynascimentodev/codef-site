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

    return (
        <nav >
            <ul className="menu-desktop">
                <li>
                    < DropDown style={{ marginRight: "5px" }} />
                </li>
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria Teste background-color: #113454;</li>
            </ul>
        </nav>
    );
}   

export default Menu;