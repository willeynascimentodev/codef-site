
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import CardProduto from './CardProduto'
import Produto from './Produto'

import  Search  from './Search' 
import  Pag  from './Pagination' 

function ModalVideoProduto({modalShow, setModalShow, imagem}) {

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
            Imagem do Produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="contem-card-imagem-produto">
            <video style={{
                  maxWidth: "100%",
                  display: "block",
                  margin: "auto"
              }} src={imagem} alt="Imagem do produto" controls>
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalVideoProduto