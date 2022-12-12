import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/categorias/categoria.slice'
import { findAll as findAllProdutos } from '../resources/produtos/produto.slice'
import  ModalProdutos  from './ModalProdutos' 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';


function SideBar() {

    const dispatch = useDispatch();

    const { categorias, isLoading, isSuccess } = useSelector((state) => state.categoria);

    const [modalShow, setModalShow] = useState(false);
    const [catId, setCatId] = useState(1);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(findAll());
    }, [dispatch]);

    const showCategoria = (e) => {
        const catId = parseInt(e.target.getAttribute('value'));
        setCatId(catId);
        setModalShow(true);
        dispatch(findAllProdutos({
            apenas_destaques: null,
            nome: null,
            cat_id: catId,
            offset: 0,
            limit: 1,
          }));
    }

    return (
        <>
            <ModalProdutos
                id={1} 
                setModalShow={setModalShow} 
                modalShow={modalShow} 
                catId={catId}
                perPage={1}
            />
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
                            <li 
                                key={categoria.id}
                                value={categoria.id} 
                                onClick={showCategoria}
                            >{categoria.nome}</li>

                        )) 
                    }
                </ul>
            </Offcanvas.Body>
            </Offcanvas>
         </>
    );
}   

export default SideBar;