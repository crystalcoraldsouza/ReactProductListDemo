import React, { Component } from 'react'
import Dropdown from '../common/Dropdown'
import Button from '../common/Button'
import autoBind from 'auto-bind'
import { isFavourite } from '../../helpers'

class ProductActions extends Component {
  constructor () {
    super ()
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

  render () {
    const { favouriteProducts, product } = this.props
    return (
      <div className='product-details'>
        <div className='display-flex padding-top-10'>
          <Dropdown selectClass={'width-65 font-bold'} placeholder={'SELECT YOUR SIZE'} size='5' options={['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']} />
          <Dropdown selectClass={'width-30 margin-left-auto font-bold'} options={['1', '2', '3', '4']} />
        </div>
        <div className='display-flex padding-top-10'>
          <Button name='button' buttonClass={'buttonClassBig clickable'} value={<div className='display-flex'><div className='width-75'>Add To Bag</div><i className='fas fa-arrow-right arrow-icon' /></div>} />
          <Button name='button' buttonClass={'buttonClassSmall clickable'} value={this.getFavourite(favouriteProducts, product.productId)} onClick={(e) => this.addToFavourites(e, product.productId)}  />
        </div>
        <div className='underlined padding-top-10 light-gray font-size-15'><i className='fas fa-truck margin-right-10 font-size-15' />Free delivery on orders over £50</div>
        <div className='underlined padding-top-10 light-gray font-size-15'><i className='far fa-check-square margin-right-10 font-size-20' />Buy now, pay in 3 installments</div>
      </div>
    )
  }
}

export default ProductActions
