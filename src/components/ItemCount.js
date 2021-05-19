import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import CardGroup from 'react-bootstrap/Cardgroup';




const ItemCount = ({initial, stock}) => {

    //Contador para sumar y restar
    const [counter, setCounter] = useState(Number(initial));
    const changeCounter = (value) =>
        setCounter(counter + value);

        return (
            <div>

            </div>
        )
}


export default ItemCount;