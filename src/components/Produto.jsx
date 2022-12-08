import Card from 'react-bootstrap/Card';

function Produto({img, name}) {
    
    return (
    <Card className='produto'>
    <Card.Img variant="top" src={img} />
    <Card.Body>
        <Card.Title style={{ 
            
         }}>
            { name }
        </Card.Title>
    </Card.Body>
    </Card>
);
}
  
  export default Produto;