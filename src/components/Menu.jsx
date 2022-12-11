import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/categorias/categoria.slice'
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import  Spinner from 'react-bootstrap/Spinner';

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
        <nav>

        </nav>
    );
}   

export default Menu;