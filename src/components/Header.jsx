import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import logo from '../images/logo.png'
import SideBar from './SideBar';
import { FaWhatsapp } from 'react-icons/fa';

import { findAll as findAllProdutos } from '../resources/produtos/produto.slice'
import  ModalProdutos  from './ModalProdutos' 

function Header({perPage}) {

    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);
    const [catId, setCatId] = useState(null);

    const showCategoria = (e) => {
        setModalShow(true);
        dispatch(findAllProdutos({
            apenas_destaques: null,
            nome: null,
            cat_id: null,
            offset: 0,
            limit: perPage,
          }));
    }

    return (
        <header className="section">
            <a className="btn-wp" target="_blank" href="https://api.whatsapp.com/send?phone=5571999728365&text=Ol%C3%A1." style={{ 
                zIndex: "1000",
                color: "green",
                bottom: "0",
                right: "0",
                marginRight: "10px",
                position: "fixed",
            }}>
                <FaWhatsapp />
            </a>
            <ModalProdutos
                id={1} 
                setModalShow={setModalShow} 
                modalShow={modalShow} 
                catId={null}
                perPage={perPage}
            />
            <SideBar perPage={perPage}/>
            <div className="row mx-auto">
                <div id="header-col-1" className="text-center col-xs-12 col-md-3">
                    <img id="logo" src={logo} alt="" />
                </div>
                <div id="header-col-2" className="text-center col-xs-12 col-md-5">
                    <input onClick={showCategoria} className="mx-auto col-md-10 form-control" type="search" placeholder='Buscar produtos'/>
                </div>
                <div id="header-col-3" className="text-center col-xs-12 col-md-3">
                    <span id="televendas">TELEVENDAS</span><br/>
                    <span className='tel'>(71) 3310-2222</span>
                </div>
            </div>
        </header>
    );
}   

export default Header;