export const FETCH_IMAGES = 'FETCH_IMAGES'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'

export function fetchImages() {
    return dispatch => {
        dispatch ({
            type: FETCH_IMAGES,
        });
        return fetch('/api/images')
            .then( res => console.log(res))
            .then( json => {
                dispatch (loadImagesSuccess( json.sources ));
                return json.sources;
            });
            //.catch(error => dispatch( fetchImagesFailure(error)) );
    };
}

export function loadImagesSuccess (sources) {
    return {
        type: FETCH_IMAGES_SUCCESS,
        payload: {
            sources: sources,   
        }
    }
}

// export const fetchImagesError = error => ({
    // type: FETCH_IMAGES_FAILURE,
    // payload: { error }
// });
