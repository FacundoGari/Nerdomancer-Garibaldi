import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemListContainerCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../print.jpg" width='100px' />
            <Card.Body>
                <Card.Title>Calavera</Card.Title>
                <ButtonGroup>
                <Button variant="dark">-</Button>
                
                <Button variant="dark">+</Button>
                </ButtonGroup>
                <Card.Text>
                <p>Calavera impresa en 3D, puede ser blanca y negra.</p>
                <i> La blanca se puede pintar del color que gustes!</i>
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
    )

}

export default ItemListContainerCard;