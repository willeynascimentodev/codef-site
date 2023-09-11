import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findCarousel } from '../resources/videos/video.slice'
import { findCarouselFotos } from '../resources/fotos/foto.slice'
import  Spinner from 'react-bootstrap/Spinner';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Video from './Video';
import Produto from './Produto';
import ModalVideoProduto from "./ModalVideoProduto";

function Imagens() {

  const dispatch = useDispatch();

    const { videosCarousel } = useSelector((state) => state.video);
    const { fotosCarousel } = useSelector((state) => state.foto);
  
    useEffect( () => {
        dispatch(findCarousel({
          apenas_destaques: 'true',
          nome: null,
          cat_id: null,
          offset: 0,
          limit: 100,
        }));

        dispatch(findCarouselFotos({
          apenas_destaques: 'true',
          nome: null,
          cat_id: null,
          offset: 0,
          limit: 100,
        }));
        
    }, [dispatch]);

    const URL = process.env.REACT_APP_IMAGENS_URL

    const [modalImagemShow, setModalImagemShow] = useState(false);
    const [imagemProduto, setImagemProduto] = useState('');
  
    const showImagem = (e) => {
        setImagemProduto(e.target.name);
        setModalImagemShow(true);
    }

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 992 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 992, min: 768 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const responsive2 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 992 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 992, min: 768 },
        items: 2
      },
      tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
  };

    return (
        <div 
          style={{
            display: '-webkit-box'
          }} 
        className="contem-carousel two-car">
          <ModalVideoProduto
            id={1} 
            setModalShow={setModalImagemShow} 
            modalShow={modalImagemShow} 
            imagem={imagemProduto}
          />
            { videosCarousel ? 
            <Carousel 
              className="carousel-products videos-car" responsive={responsive}>
                { videosCarousel.map((produto) => (
                  <Video classes="produto" showDesc={false} showImagem={showImagem} key={produto.id} name="Video" img={`${URL}/${produto.video}`}/>
                )) }
            </Carousel>
            : null}

            { fotosCarousel ? 
              <Carousel className="carousel-products imagens-car" responsive={responsive2}>
                  
                  { fotosCarousel.map((produto) => (
                    <Produto classes="produto" showDesc={false} key={produto.id} name="Imagem" img={`${URL}/${produto.imagem}`}/>
                  )) }
              </Carousel>
            : null}
        </div>
    );
}   

export default Imagens;