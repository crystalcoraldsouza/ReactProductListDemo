import React, { Component } from 'react'
import ProductActions from './ProductActions'
import ProductDescription from './ProductDescription'
import Button from '../common/Button'

class ProductDetails extends Component {
  render () {
    const { product, favouriteProducts, updateFavouriteProduct, updateSelectedProduct } = this.props
    return (
      <div>
        <div className='product-details display-flex justify-content max-height'>
          <figure>
            <img width='65%' src={product.image && product.image.src} />
          </figure>
          <div className='width-35 product-division'>
            <Button name='button' buttonClass={'buttonClassSmall margin-bottom-15 clickable'} value={<i className='fas fa-arrow-left' />} onClick={() => updateSelectedProduct(null)}  />
            <div className='light-gray font-small'>{product.division || 'Division Unavailable'}</div>
            <div className='product-listings-title me font-x-large'>{product.displayName.toUpperCase() || 'Division Unavailable'}</div>
            <div className='product-price padding-top-10'>{product.price ? ('£' + product.price) : 'Price Unavailable'}</div>
            <div className='product-listings-title me font-large'>{'AVAILABLE COLORS'}</div>
            <div className='light-gray font-small padding-top-10 product-colors'>{product.color.toUpperCase()}</div>
            <ProductActions product={product}
              favouriteProducts={favouriteProducts}
              updateFavouriteProduct={updateFavouriteProduct}
              updateSelectedProduct={updateSelectedProduct} />
          </div>
        </div>
        <ProductDescription product={product} />
      </div>
    )
  }
}

export default ProductDetails
