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
                const maxImagesPerRow = 3;
                const minImagesPerRow = 2;
                let imagesPerRow = 0;

                if (currentSources.length == minImagesPerRow) {
                    imagesPerRow = minImagesPerRow;
                }
                else if (currentSources.length == maxImagesPerRow) {
                    imagesPerRow = maxImagesPerRow;
                }
                else {
                    imagesPerRow = Math.floor(Math.random() * ( (maxImagesPerRow + 1) - minImagesPerRow )) + minImagesPerRow;
                }

                let rowSources = currentSources.slice(0, imagesPerRow);
                currentSources.splice(0, imagesPerRow);
                createdRows++;
                columnsWidth = imagesPerRow == minImagesPerRow ? 6 : 4;

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
