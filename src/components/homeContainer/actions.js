import { UPDATE_FAVOURITE_PRODUCT } from './actionTypes'

export function updateFavouriteProduct (favourtiteProducts) {
  return {
    type: UPDATE_FAVOURITE_PRODUCT,
    payload: favourtiteProducts
  }
}
