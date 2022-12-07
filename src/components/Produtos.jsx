import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Produto from './Produto';
import img from '../images/produto-teste.png'

function Produtos() {

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
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
                <Produto name="Teste" img={img}/>
            </Carousel>
        </div>
    );
}   

export default Produtos;