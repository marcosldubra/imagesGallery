import { getImages } from 'app/api';

export const FETCH_IMAGES = 'FETCH_IMAGES'
export const LOAD_IMAGES = 'LOAD_IMAGES'

export function fetchGallery () {
    return {
        type: FETCH_IMAGES,
        loading: true,
    }
    
    api.función.then(
        (sources) => loadImages(sources));
}

export function loadImages (sources) {
    return {
        type: LOAD_GALLERY,
        loading: false,
        sources: sources,
    }
}
