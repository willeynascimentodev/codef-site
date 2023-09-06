import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/banners/banner.slice'
import Carousel from 'react-bootstrap/Carousel';
import  Spinner from 'react-bootstrap/Spinner';

function BannerInfo() {
    const dispatch = useDispatch();

    const { banners, isLoading, isSuccess } = useSelector((state) => state.banner);

    
        
    return (
        <section className="inner-section" id="inner-banner">
            <h3>Mais de 30 anos de história</h3>
            <p>Com um pensamento voltado para o futuro e muita determinação, 
                Guilherme Teixeira, um dos pioneiros na cidade de Salvador-BA do ramo de ferramentas, 
                máquinas, material de proteção e afins, fundou em 06 de julho de 1984, a CODEF - Comercial de Ferramentas Ltd.
            </p>
            <a href="">
                <button class="btn" style={{left: '0', backgroundColor: "#ff7c00", color:"white"}}>Conheça mais um pouco!</button>
            </a>
        </section>
    );
}   

export default BannerInfo;