import React from 'react'
import { FaTruck, FaBox, FaCreditCard } from 'react-icons/fa';

function Info() {
    return (
        <section id="contem-info" style={
                {
                    background: "#e6e6e6", 
                    paddingTop: "20px",
                    paddingBottom: "20px"
                }
            }>
            <div class="info row">
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">
                            <FaTruck />
                        </div>
                    </div>
                    <div className="card-info-text">
                            Frete Grátis Salvador e Região.
                    </div>
                </div>
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">
                            <FaBox />
                        </div>
                    </div>
                    <div className="card-info-text">
                        Retire na Loja. Compre no WhatsApp e retire na loja.
                    </div>
                </div>
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">
                            <FaCreditCard />
                        </div>
                    </div>
                    <div className="card-info-text">
                            Pague em até 12x sem Juros no Cartão.
                    </div>
                </div>
            </div>
        </section>
    );
}   

export default Info;