import { combineReducers } from 'redux';
import { LOAD_GALLERY } from 'app/actions/actions'

const initialState = {
    sources: [ '/images/prueba.jpg', '/images/prueba.jpg' ],
}

function imagesReducer (state = initialState.sources, action) {
  switch (action.type) {
        case LOAD_GALLERY:
            return [ action.source, ...state  ]
        default:
            return state
    }
}

export default combineReducers({
  sources: imagesReducer,
})

