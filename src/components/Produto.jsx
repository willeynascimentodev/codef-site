import Card from 'react-bootstrap/Card';
import {  useState } from 'react';

function Produto({showDesc = true, img, name, classes, showImagem}) {

    const [btnText, setBtnTxt] = useState('mais');
    const [expanded, setExpanded] = useState(true);
    const [height, setHeight] = useState('');
    const [display, setDisplay] = useState('-webkit-box');


    const expandCollapse = () => {
        setExpanded(expanded ? false : true);
        setBtnTxt(expanded ? "menos" : "mais" );
        setHeight(expanded ? "auto" : "" );
        setDisplay(expanded ? "" : "-webkit-box" );
    }
    
    return (
    <Card className={classes}>
    <Card.Img onClick={showImagem} name={img} variant="top" src={img} />
    { showDesc ? 
    <Card.Body style={{ height: `${height}`, borderRadius: "6px" }}>
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
    : null }
    </Card>
);
}
  
  export default Produto;