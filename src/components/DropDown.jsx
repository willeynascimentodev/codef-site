import Dropdown from 'react-bootstrap/Dropdown';
import { FaBars } from 'react-icons/fa';

function BasicExample({categorias}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontWeight: "bold" }}>
      <FaBars  /> OUTRAS
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu-drop">
        <Dropdown.Item className="item-menu-drop" href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item className="item-menu-drop" href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item className="item-menu-drop" href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;