import { UPDATE_FAVOURITE_PRODUCT } from './actionTypes'

export function updateFavouriteProduct (favourtiteProducts) {
  console.log('action', favourtiteProducts)
  return {
    type: UPDATE_FAVOURITE_PRODUCT,
    payload: favourtiteProducts
  }
}
