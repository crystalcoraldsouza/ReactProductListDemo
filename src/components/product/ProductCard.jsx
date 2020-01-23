import React, { Component } from 'react'
import autoBind from 'auto-bind'
import { isFavourite } from '../../helpers'

class ProductCard extends Component {
  constructor () {
    super()
    autoBind(this)
  }

  addToFavourites (e, productId) {
    e.preventDefault()
    e.stopPropagation()
    const { favouriteProducts } = this.props
    if (isFavourite(favouriteProducts, productId)) {
      let updatedFavouriteProducts = favouriteProducts.filter(product => product !== productId)
      this.props.updateFavouriteProduct(updatedFavouriteProducts)
    } else {
      let updatedFavouriteProducts = favouriteProducts && favouriteProducts.length ? [...favouriteProducts, productId] : [productId]
      updatedFavouriteProducts = [...new Set(updatedFavouriteProducts)]
      this.props.updateFavouriteProduct(updatedFavouriteProducts)
    }
  }

  getFavourite (favouriteProducts, productId) {
    if (isFavourite(favouriteProducts, productId)) return (<i className='fas fa-heart' />)
    return (<i className='far fa-heart' />)
  }

  viewDetails (e, product) {
    e.preventDefault()
    e.stopPropagation()
    this.props.updateSelectedProduct(product)
  }

  render () {
    const { product, favouriteProducts } = this.props
    return (
      <div className='product-card clickable' onClick={(e) => this.viewDetails(e, product)}>
        <img src={product.image && product.image.src} />
        <div className='product-card-new'>NEW</div>
        <div className='product-card-fav clickable' onClick={(e) => this.addToFavourites(e, product.productId)} >{this.getFavourite(favouriteProducts, product.productId)}</div>
        <div className='light-gray font-small product-division'>{product.division || 'Division Unavailable'}</div>
        <div className='product-displayName padding-top-5'>{product.displayName || 'Name Unavailable'}</div>
        <div className='product-price'>{product.price ? ('£' + product.price) : 'Price Unavailable'}</div>
        <div className='light-gray font-small padding-top-10 product-colors'>{product.colorVariations.length} colours</div>
      </div>
    )
  }
}

export default ProductCard
