
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import CardProduto from './CardProduto'
import ModalImagemProduto from "./ModalImagemProduto";
import Produto from './Produto'

import  Search  from './Search' 
import  Pag  from './Pagination' 

function ModalProdutos({modalShow, setModalShow, catId, perPage}) {

  const dispatch = useDispatch();
  const { produtos, produtosTotal, isLoading } = useSelector((state) => state.produto);
  const [fullscreen, setFullscreen] = useState(true);
  const URL = process.env.REACT_APP_IMAGENS_URL;

  const [modalImagemShow, setModalImagemShow] = useState(false);
  const [imagemProduto, setImagemProduto] = useState('');

  const showImagem = (e) => {
      setImagemProduto(e.target.name);
      setModalImagemShow(true);
  }


  return (
    <>
      <ModalImagemProduto
          id={1} 
          setModalShow={setModalImagemShow} 
          modalShow={modalImagemShow} 
          imagem={imagemProduto}
      />
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Search catId={catId} perPage={perPage}/>
          <Pag total={produtosTotal} perPage={perPage} catId={catId}/>
          <div class="contem-card-produto">
            { 
                  produtos.map((produto) => (
                    <Produto 
                      classes="col-4 col-sm-3 col-md-2 card-produto" 
                      key={produto.id} 
                      name={produto.nome} 
                      img={`${URL}/${produto.imagem}`} 
                      value={`${URL}/${produto.imagem}`}
                      showImagem={showImagem}
                    />
                )) 
                
            }

            {
              produtos.length == 0 ? 'Nenhum produto encontrado' : ''
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProdutos