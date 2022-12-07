import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'

function Banner() {
    return (
        <section className="section" id="banner">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="Banner"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Banner"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

        </section>
    );
}   

export default Banner;