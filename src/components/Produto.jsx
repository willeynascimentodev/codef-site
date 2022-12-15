import Card from 'react-bootstrap/Card';
import {  useState } from 'react';

function Produto({img, name, classes}) {

    const [btnText, setBtnTxt] = useState('mais');
    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState('');
    const [display, setDisplay] = useState('-webkit-box');


    const expandCollapse = () => {
        setExpanded(expanded ? false : true);
        setBtnTxt(expanded ? "menos" : "mais" );
        setHeight(expanded ? "auto" : "" );
        setDisplay(expanded ? "" : "-webkit-box" );
        console.log(expanded);
    }
    
    return (
    <Card className={classes}>
    <Card.Img variant="top" src={img} />
    <Card.Body style={{ height: `${height}` }}>
        <Card.Title>
            <p className="text-elips" style={{ display: `${display}` }}>
                { name } 
            </p>
            <span onClick={expandCollapse} className='text-elips-expand'>
                {
                    name.length >= 24 ? btnText : ''
                }
                
            </span>
        </Card.Title>
    </Card.Body>
    </Card>
);
}
  
  export default Produto;