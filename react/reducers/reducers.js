import { combineReducers } from 'redux';
//import { successType } from 'fredux';
import { LOAD_GALLERY } from '../actions/actions'

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

