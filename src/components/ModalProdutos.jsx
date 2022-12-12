
import { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';

import  Search  from './Search' 
import  Pag  from './Pagination' 

function ModalProdutos({modalShow, setModalShow, catId, perPage}) {

  const dispatch = useDispatch();
  const { produtos, produtosTotal, isLoading } = useSelector((state) => state.produto);

  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Search catId={catId} perPage={perPage}/>
          <Pag total={produtosTotal} perPage={perPage} catId={catId}/>
          { 
                 produtos.map((produto) => (
                  <li>{produto.nome}</li>
                
                  

              )) 
              
          }

          {
            produtos.length == 0 ? 'Nenhum produto encontrado' : ''
          }

        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalProdutos