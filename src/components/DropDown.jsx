import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from 'react-icons/fa';

function BasicExample({categorias, showCategoria}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontWeight: "bold" }}>
      <FaBars  /> OUTRAS
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-drop">
            {
                categorias.map((categoria) => (
                    <Dropdown.Item 
                      key={categoria.id} 
                      value={categoria.id} 
                      className="item-menu-drop" 
                      href="#"
                      onClick={ showCategoria }
                    >
                        { categoria.nome }
                    </Dropdown.Item>
                )) 
            }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;