import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import CardGroup from 'react-bootstrap/Cardgroup';

const ItemCount = ({initial, stock, onChange}) => {

    
    const [stockRequired, setStockRequired] = useState(initial);
    const [counter, setCounter] = useState(1);
    //const changeCounter = (value) =>
        //setCounter(counter + value);

        function onChange(count) {
            console.log(count);
            }
            
    const onAdd = () => {
        if (stock >= stockRequired + 1) {
            setStockRequired(stockRequired + 1);
        }
    };

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../print.jpg" width='100px' />
                        <Card.Body>
                            <Card.Title>Calavera</Card.Title>
                            <ButtonGroup>
                            <Button variant="dark" onClick={() => setCounter(counter - 1)}>-</Button>
                            <Button variant="dark" onClick={onChange(counter)} disabled={ counter <=0} > { (counter <= 0) ? 'No hay stock' : counter } </Button>
                            <Button variant="dark" onClick={() => setCounter(counter + 1)}>+</Button>
                            </ButtonGroup>

                            <Card.Text>
                            <p>Calavera impresa en 3D, puede ser blanca y negra.</p>
                            <i> La blanca se puede pintar del color que gustes!</i>
                            </Card.Text>
                            <Button variant="dark">Agregar al Carrito</Button>
                        </Card.Body>
                </Card>
            
            </div>
        )
}

export default ItemCount;