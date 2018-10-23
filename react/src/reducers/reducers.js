import { combineReducers } from 'redux';
import { FETCH_IMAGES, FETCH_IMAGES_SUCCESS } from 'app/actions/actions'

const initialState = {
    sources: [],
    loading: true,
}

function imagesReducer (state = initialState, action) {
    switch (action.type) {
        
        case FETCH_IMAGES:
            return {
                ...state,
                loading: true,
                error: null,
            }
        
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                sources: action.payload.sources, 
                loading: false, 
            }
        
        default:
            return state
    }
}

export default combineReducers({
    app: imagesReducer,
})

