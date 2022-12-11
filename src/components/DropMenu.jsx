import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/categorias/categoria.slice'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';

function DropMenu() {

    const dispatch = useDispatch();
    const { categorias } = useSelector((state) => state.categoria);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(findAll());
    }, [dispatch]);

    return (
        <>
            <Button id="btn-menu-mobile" variant="primary" onClick={handleShow}>
                <FaBars />
            </Button>
    
            <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Categorias</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul className='menu-mobile'>
                    {
                        categorias.map((categoria) => (
                            <li key={categoria.id}>{categoria.nome}</li>

                        )) 
                    }
                </ul>
            </Offcanvas.Body>
            </Offcanvas>
         </>
    );
}   

export default DropMenu;