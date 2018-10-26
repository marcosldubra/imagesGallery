import { getImagesFromApi } from '../api.js';

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';

export function fetchImages() {
    return dispatch => {
        dispatch ({
            type: FETCH_IMAGES,
        });
        return  getImagesFromApi()
                .then (sources => {
                    dispatch (loadImagesSuccess( sources ));
                });
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
