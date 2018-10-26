import React from 'react'
import { Col } from 'reactstrap';

let Image = ({ columnsWidth, source }) => {
  return (
    <Col sm={ columnsWidth } md={ columnsWidth } lg={ columnsWidth }>
      <img className='img-fluid' src = { source } />
    </Col>
  );
}

export default Image
