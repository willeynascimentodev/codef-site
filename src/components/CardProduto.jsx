import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({produto, path}) {
  return (
    <Card className="col-4 col-sm-3 col-md-2 card-produto">
      <Card.Img variant="top" src={path} />
      <Card.Body>
        <Card.Title style={{fontSize: "12px"}}>{produto.nome}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;