import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { findAll } from '../resources/infos/info.slice'
import Carousel from 'react-bootstrap/Carousel';
import  Spinner from 'react-bootstrap/Spinner';

function BannerInfo() {
    const dispatch = useDispatch();

    const { infos, isLoading } = useSelector((state) => state.info);

    useEffect(() => {
        dispatch(findAll());
    }, [dispatch]);

    
    if(isLoading) {
        return null;
    }
    console.log(infos);
    return (
        <section className="inner-section" id="inner-banner">
            { infos && infos.titulo ? 
                <h3>{infos.titulo}</h3>
            : null }

            { infos && infos.texto ? 
                <p>
                    {infos.texto}
                </p>
            : null }

            { infos && infos.link ? 
                <a href={infos.link}>
                    <button className="btn" style={{left: '0', backgroundColor: "#ff7c00", color:"white"}}>Conheça mais um pouco!</button>
                </a>
            : null }

        </section>
    );
}   

export default BannerInfo;