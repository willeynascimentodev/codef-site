function FormEmail() {
    return (
        <section id="contem-form" style={{ background: "#ff6600", padding: "20px 0px" }}>
            <div id="form" class="row" style={{ textAlign: "center", width: "90%", margin: "auto"}}>
                <h2 className="h2" style={{ textAlign: "center", marginTop: "20px", color: "#fff", marginBottom: "30px" }}>CADASTRE-SE E RECEBA PROMOÇÕES E NOVIDADES EXCLUSIVAS!</h2>
                <input placeholder="Nome" type="text" className="form-control col-5" />
                <input placeholder="E-mail" type="text" className="form-control col-5" />
                <input type="submit" className="form-control col-sm-2" value="CADASTRAR"/>
            </div>
        </section>
    );
}   

export default FormEmail;