
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import CardProduto from './CardProduto'

import  Search  from './Search' 
import  Pag  from './Pagination' 

function ModalProdutos({modalShow, setModalShow, catId, perPage}) {

  const dispatch = useDispatch();
  const { produtos, produtosTotal, isLoading } = useSelector((state) => state.produto);
  const [fullscreen, setFullscreen] = useState(true);
  const URL = process.env.REACT_APP_IMAGENS_URL

  return (
    <>
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
                    <CardProduto produto={produto} path={`${URL}/${produto.imagem}`}/>
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