import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/fornecedores/fornecedor.slice'
import  Spinner from 'react-bootstrap/Spinner';

function Fornecedores() {

    const dispatch = useDispatch();

    const { fornecedores, isLoading } = useSelector((state) => state.fornecedor);

    useEffect(() => {
        dispatch(findAll({
          apenas_destaques: 'true',
          nome: ''
        }));
    }, [dispatch]);

    if(isLoading) {
        <Spinner/>
    }

    const URL = process.env.REACT_APP_IMAGENS_URL

    console.log(fornecedores);
    return (
        <section id="contem-fornecedores">
                <h2 className="h2" style={{ textAlign: "center", marginTop: "20px"}}>Fornecedores</h2>
            <div id="fornecedores row" style={{ textAlign: "center", width: "90%", margin: "auto"}}>
                {
                    fornecedores.map((fornecedor) => (
                        <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                            <img src={`${URL}/${fornecedor.imagem}`} alt="" />
                        </div>
                    )) 
                }
                
       
            </div>
        </section>
    );
}   

export default Fornecedores;