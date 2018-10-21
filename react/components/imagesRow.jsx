import React from 'react'
import Image from './image.jsx'

import { Row, Col } from 'reactstrap';

const ImagesRow = ({ sources, columnsWidth }) => {

    return (
        <Row className='row'>
            { sources.map(( source, i ) => <Image key={ i } columnsWidth = { columnsWidth } source={ source } /> )}
        </Row>
    )
}

export default ImagesRow
