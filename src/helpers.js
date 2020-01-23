export function isFavourite (favouriteProducts, productId) {
    if (favouriteProducts && favouriteProducts.length && favouriteProducts.length !== 0 && (favouriteProducts.filter(product => product === productId).length !== 0)) return true
    return false
}