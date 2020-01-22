import React, { Component } from 'react'
import autoBind from 'auto-bind'
class ProductCard extends Component {
    constructor () {
        super()
        autoBind(this)
    }
    addToFavourites(e, productId) {
        e.preventDefault()
        const { favouriteProducts } = this.props
        // let favouriteProducts = ['FX3239']
        let updatedFavouriteProducts = favouriteProducts && favouriteProducts.length ? [...favouriteProducts, productId] : [productId]
        // console.log('updated', [...new Set(updatedFavouriteProducts)])
        updatedFavouriteProducts = [...new Set(updatedFavouriteProducts)]
        this.props.updateFavouriteProduct(updatedFavouriteProducts)
    }
    getFavourite (favouriteProducts, productId) {
        if (favouriteProducts && favouriteProducts.length && favouriteProducts.length!==0 && (favouriteProducts.filter(product => product === productId).length !== 0)) return (<i className="fas fa-heart"></i>)
        return (<i className="far fa-heart"></i>)
    }
    viewDetails(product) {
        console.log(product)
        this.props.updateSelectedProduct(product)
    }
    render() {
        const { product, favouriteProducts } =  this.props
      return (
        <div className='product-card clickable' onClick={() => this.viewDetails(product)}>
            <img src={product.image && product.image.src} />
            <div className='product-card-new'>NEW</div>
            <div className='product-card-fav clickable' onClick={(e) => this.addToFavourites(e, product.productId)} >{this.getFavourite(favouriteProducts, product.productId)}</div>
            <div className='light-gray font-small product-division'>{product.division}</div>
            <div className='product-displayName padding-top-10'>{product.displayName}</div>
            <div className='product-price'>£{product.price}</div>
            <div className='light-gray font-small padding-top-10 product-colors'>{product.colorVariations.length} colours</div>
        </div>
      )
    }
}

export default ProductCard