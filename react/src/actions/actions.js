import { PROMISE_CALL } from 'fredux';
import { getImages } from 'app/api';

export const LOAD_GALLERY = 'LOAD_GALLERY'

export function loadGallery (source) {
    return {
        type: LOAD_GALLERY,
        source: source,
    }
}
