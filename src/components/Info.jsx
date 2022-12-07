import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Info() {
    return (
        <div id="contem-info">
            <div class="info row">
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">
                            <FontAwesomeIcon icon="fa-thin fa-truck" />
                        </div>
                    </div>
                    <div className="card-info-text">
                            Frete Grátis Salvador e Região.
                    </div>
                </div>
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">
                            
                        </div>
                    </div>
                    <div className="card-info-text">
                        Retire na Loja. Compre no WhatsApp e retire na loja.
                    </div>
                </div>
                <div className="card-info col-12 col-sm-3">
                    <div className="card-info-header">
                        <div className="card-info-contem-icon">

                        </div>
                    </div>
                    <div className="card-info-text">
                            Pague em até 12x sem Juros no Cartão.
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Info;