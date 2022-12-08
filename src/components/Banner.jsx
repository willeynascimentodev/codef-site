import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/banners/banner.slice'
import Carousel from 'react-bootstrap/Carousel';
import  Spinner from 'react-bootstrap/Spinner';

function Banner() {
    const dispatch = useDispatch();

    const { banners, isLoading, isSuccess } = useSelector((state) => state.banner);

    useEffect(() => {
        dispatch(findAll());
    }, [dispatch]);

    if(isLoading) {
        <Spinner/>
    }

    const URL = process.env.REACT_APP_IMAGENS_URL
        
    return (
        <section className="section" id="banner">
            <Carousel>
                {
                    banners.map((banner) => (
                        <Carousel.Item key={banner.id}>
                            <img className="d-block w-100" src={`${URL}/${banner.imagem}`} alt="Banner" />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )) 
                }
            </Carousel>

        </section>
    );
}   

export default Banner;