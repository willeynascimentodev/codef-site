import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findCarousel } from '../resources/produtos/produto.slice'
import  Spinner from 'react-bootstrap/Spinner';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Produto from './Produto';

function Produtos() {

  const dispatch = useDispatch();

    const { produtosCarousel, isLoadingCarousel, isSuccessCarousel } = useSelector((state) => state.produto);
  
    useEffect( () => {
        dispatch(findCarousel({
          apenas_destaques: 'true',
          nome: null,
          cat_id: null,
          offset: 0,
          limit: 100,
        }));
    }, [dispatch]);

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
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    };

    return (
        <div className="contem-carousel">
            <Carousel className="carousel-products" responsive={responsive}>
              {
                produtosCarousel.map((produto) => (
                  <Produto key={produto.id} name={produto.nome} img={`${URL}/${produto.imagem}`}/>
                ))
              }
            </Carousel>
        </div>
    );
}   

export default Produtos;