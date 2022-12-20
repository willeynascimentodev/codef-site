import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/fornecedores/fornecedor.slice'
import  Spinner from 'react-bootstrap/Spinner';
import Carousel from "react-multi-carousel";

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

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2000, min: 992 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    };

    const URL = process.env.REACT_APP_IMAGENS_URL

    return (
        <div className="contem-carousel fornecedores">
          <h2 style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "30px",
          }}>Fornecedores</h2>

            <Carousel className="carousel-fornecedores" responsive={responsive}>
            {
                fornecedores.map((fornecedor) => (
                    <img style={{ width: "80%" }} src={`${URL}/${fornecedor.imagem}`} alt="" />  
                ))
            }
            </Carousel>
        </div>
    );
}   

export default Fornecedores;