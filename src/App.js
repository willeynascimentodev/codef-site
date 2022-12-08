import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Produtos from './components/Produtos';
import Info from './components/Info';
import Fornecedores from './components/Fornecedores';
import FormEmail from './components/FormEmail';
import Rodape from './components/Rodape';
import { ToastContainer } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/header.css';
import './styles/nav.css';
import './styles/banner.css';
import './styles/produtos.css';
import './styles/info.css';
import './styles/fornecedores.css';
import './styles/form.css';
import './styles/rodape.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="contain-all">
      <Header />      
      <Menu />
      <Banner />      
      <Produtos />      
      <Info />      
      <Fornecedores />      
      <FormEmail />      
      <Rodape />      
      <ToastContainer />
      
    </div>
  );
}

export default App;
