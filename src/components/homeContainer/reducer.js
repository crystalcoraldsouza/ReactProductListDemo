import { UPDATE_FAVOURITE_PRODUCT } from './actionTypes'


const initialState = {
    favouriteProducts: []
}

export function homeContainerReducer(state = initialState, action = {}) {
    console.log('reducer', action)
    switch(action.type) {
        case UPDATE_FAVOURITE_PRODUCT:
            return Object.assign({}, state, {
                favouriteProducts: action.payload
            })
        default:
            return state
    }
}

