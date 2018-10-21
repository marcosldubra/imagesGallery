import React from 'react'
import Image from './image'
import {  Row, Col } from 'reactstrap';

class ThreeImagesRow extends React.Component {
    render () {
        return (
            <Row>
                <Col sm={ 4 } md={ 4 } lg={ 4 }>
                    <Image source='../images/prueba.jpg' />
                </Col>
                <Col sm={ 4 } md={ 4 } lg={ 4 } >
                    <Image source='../images/prueba.jpg' />
                </Col> 
                <Col sm={ 4 } md={ 4 } lg={ 4 } >
                    <Image source='../images/prueba.jpg' />
                </Col>                 
            </Row>
        );
    }
}

export default ThreeImagesRow