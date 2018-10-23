import { combineReducers } from 'redux';
import { FETCH_IMAGES, LOAD_IMAGES } from 'app/actions/actions'

const initialState = {
    sources: [],
    loading: true,
}

function imagesReducer (state = initialState.sources, action) {
    switch (action.type) {
        case FETCH_GALLERY:
            return state
        case LOAD_GALLERY:
    return { action.sources, loading: action.loading, ...state  }
        default:
            return state
    }
}

export default combineReducers({
  sources: imagesReducer,
})

