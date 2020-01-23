import React, { Component } from 'react'
import ProductCard from './ProductCard'

class ProductList extends Component {
  render () {
    const { favouriteProducts, updateFavouriteProduct, updateSelectedProduct } = this.props
    return (
      <div className='product-list display-flex flex-wrap-wrap'>
        {this.props.products.map((product, index) => {
          return (
            <ProductCard
              product={product}
              key={index}
              favouriteProducts={favouriteProducts}
              updateFavouriteProduct={updateFavouriteProduct}
              updateSelectedProduct={updateSelectedProduct} />
          )
        })}
      </div>
    )
  }
}

export default ProductList
