import React, { Component } from 'react'
import ProductActions from './ProductActions'
import ProductDescription from './ProductDescription'

class ProductDetails extends Component {
  render () {
    const { product } = this.props
    return (
      <div>
        <div className='product-details display-flex'>
          <img width='50%' src={product.image && product.image.src} />
          <div style={{marginLeft: '25px'}}>
            <div className='light-gray font-small product-division'>{product.division.toUpperCase()}</div>
            <div className='product-listings-title me font-xx-large'>{product.displayName.toUpperCase()}</div>
            <div className='product-price padding-top-10'>£{product.price}</div>
            <div className='product-listings-title me font-x-large'>{'AVAILABLE COLORS'}</div>
            <div className='light-gray font-small padding-top-10 product-colors'>{product.color.toUpperCase()}</div>
            <ProductActions product={product} />
          </div>
        </div>
        <ProductDescription product={product} />
      </div>
    )
  }
}

export default ProductDetails
