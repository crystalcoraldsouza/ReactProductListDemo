import { UPDATE_FAVOURITE_PRODUCT } from './actionTypes'

const initialState = {
  favouriteProducts: []
}

export function homeContainerReducer (state = initialState, action = {}) {
  console.log('reducer', action)
  switch (action.type) {
    case UPDATE_FAVOURITE_PRODUCT:
      let something = Object.assign({}, state, {
        favouriteProducts: action.payload
      })
      console.log('SOMETHING', something)
      return something
    default:
      return state
  }
}
