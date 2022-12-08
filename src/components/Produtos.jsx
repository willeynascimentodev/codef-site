import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/produtos/produto.slice'
import  Spinner from 'react-bootstrap/Spinner';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Produto from './Produto';
import img from '../images/produto-teste.png'

function Produtos() {

  const dispatch = useDispatch();

    const { produtos, isLoading } = useSelector((state) => state.produto);

    useEffect(() => {
        dispatch(findAll({
          apenas_destaques: 'true',
          nome: ''
        }));
    }, [dispatch]);

    if(isLoading) {
        <Spinner/>
    }

    console.log(produtos);

    const URL = process.env.REACT_APP_IMAGENS_URL

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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div className="contem-carousel">
            <Carousel className="carousel-products" responsive={responsive}>
              {
                produtos.map((produto) => (
                  <Produto key={produto.id} name={produto.nome} img={`${URL}/${produto.imagem}`}/>
                )) 
              }
            </Carousel>
        </div>
    );
}   

export default Produtos;