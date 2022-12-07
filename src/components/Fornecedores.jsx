import fornecedor from "../images/fornecedor.png";

function Fornecedores() {
    return (
        <section id="contem-fornecedores">
                <h2 className="h2" style={{ textAlign: "center", marginTop: "20px"}}>Fornecedores</h2>
            <div id="fornecedores row" style={{ textAlign: "center", width: "90%", margin: "auto"}}>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
                <div className="fornecedor col-sm-6 col-md-3 col-lg-2">
                    <img src={fornecedor} alt="" />
                </div>
            </div>
        </section>
    );
}   

export default Fornecedores;