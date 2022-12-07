import logo2 from "../images/logo2.png"
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
function Rodape() {

    const date = new Date();

    return (
        <footer id="contem-rodape-info">
            <div id="form" class="row rodape-info" style={
                    { 
                        textAlign: "center",
                        width: "90%", 
                        margin: "auto", 
                        padding: "20px 0px", 
                        display: "flex", 
                        justifyContent:"space-between", 
                    }
                }>
                <div id="rodape-info-left" class="col-12 col-sm-6"  style={{ textAlign: "left", maxWidth: "320" }}>
                    <p>
                        <img id="logo-rodape" src={logo2} alt="Logo 2" /><br/>
                        Venha conhecer esta empresa que não
                        para de crescer e descobrir porque que a
                        CODEF é considerada uma referência
                        nacional em vendas de ferramentas,
                        máquinas, equipamentos e EPI´s.
                    </p>

                </div>
                <div id="rodape-info-right" class="col-12 col-sm-6" style={{ textAlign: "left", paddingTop: "10px", maxWidth: "320px" }}>
                    <p className="rodape-endereco" style={{ marginBottom: "20px" }}>
                        ENDEREÇO: Rua Barão de Cotegipe,<br/>
                        Mares, 191, CEP 40.445.001, Salvador-BA

                    </p>
                    <p className="rodape-tels">
                        <FaPhone /> (71) 3310-2222<br/>
                        <FaWhatsapp style={{}}/> (71) 99972-8365
                    </p>
                </div>
            </div>
            <div className="cp">
                Todos os direitos reservados © {date.getFullYear()} CODEF
            </div>
        </footer>
    );
}   

export default Rodape;