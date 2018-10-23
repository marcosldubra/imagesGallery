import React from 'react'
import { connect } from 'react-redux'

import ImagesRow from './imagesRow.jsx'


let Gallery = ({ sources }) => {
    const createRows =  () => {
        let rows = [];
        let createdRows = 0;
        let columnsWidth = 0;
        let currentSources = sources.slice();

        while (currentSources.length > 0) {
              let imagesPerRow = 0;

              if (currentSources.length == 2) {
                imagesPerRow = 2;
              }
              else if (currentSources.length == 3) {
                imagesPerRow = 3;
              }
              else {
                imagesPerRow = Math.floor(Math.random() * ( 4-2 )) + 2;
              }

              let rowSources = currentSources.slice(0, imagesPerRow);
              currentSources.splice(0, imagesPerRow);
              createdRows++;
              columnsWidth = imagesPerRow == 2 ? 6 : 4;

              rows.push(<ImagesRow key={ createdRows } sources={ rowSources } columnsWidth={ columnsWidth } />);
        }

        return rows;
    } 

    return (
        <div className='rows'>{ createRows() }</div>
    )
}

export default connect(
    state => ({
        sources: state.app.sources,
    }),
    null
)(Gallery)
