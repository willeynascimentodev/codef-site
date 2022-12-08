import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { insert, reset } from '../resources/leads/lead.slice'
import { toast } from 'react-toastify'


function FormEmail() {
    const dispatch = useDispatch();

    const { isLoading, message, isError, isSuccess} = useSelector( (state) => state.lead );

    const [nomeLead, setNome ] = useState('');
    const [emailLead, setEmail] = useState('');

    useEffect( () => {
        if(isSuccess){
            dispatch(reset());
            toast.success('Você foi cadastrado com sucesso.');
        }

        if(isError){
            toast.error(message);
            dispatch(reset());
        }

        dispatch(reset())
    }, [dispatch, isSuccess, isError])

    const formAction = (e) => {
        
        if(!nomeLead || nomeLead.length < 2) {
            return toast.error('Informe um nome válido');
        } 

        if(emailLead.length < 5 || !emailLead.includes('@')) {
            return toast.error('Informe um e-mail válido');
        }

        dispatch(insert({
            nome: nomeLead,
            email: emailLead
        }));
    }

    return (
        <section id="contem-form" style={{ background: "#ff6600", padding: "20px 0px" }}>
            <div id="form" className="row" style={{ textAlign: "center", width: "90%", margin: "auto"}}>
                <h2 className="h2" style={{ textAlign: "center", marginTop: "20px", color: "#fff", marginBottom: "30px" }}>CADASTRE-SE E RECEBA PROMOÇÕES E NOVIDADES EXCLUSIVAS!</h2>
                <input onChange={ (e) => setNome(e.target.value) } name="nome" id="nome" placeholder="Nome" type="text" className="form-control col-5" value={nomeLead}/>
                <input onChange={ (e) => setEmail(e.target.value) } name="email" id="email" placeholder="E-mail" type="text" className="form-control col-5" value={emailLead}/>
                <input onClick={formAction} type="submit" className="form-control col-sm-2" value="CADASTRAR"/>
            </div>
        </section>
    );
}   

export default FormEmail;