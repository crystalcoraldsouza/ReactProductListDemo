import React, { Component } from 'react'

class ProductDescription extends Component {
  render () {
    const { product } = this.props
    return (
      <div className='product-description'>
         <div className='font-x-large product-listings-title'>HIGHLIGHTS</div>
         <div className='display-flex padding-top-10'>
           <div>
             <div className='font-large product-listings-title'>TIMELESS DESIGN</div>
              <div className='padding-top-10'>True to its original design, the Stan Smith's classic silhouette has endured sneaker style for over four decades.</div>
           </div>
           <div>
             <div className='font-large product-listings-title'>VERSATILE STYLING</div>
              <div className='padding-top-10'>This classic shoe embodies a universal style and minimalistic design that doesn't need attention to do its job.</div>
           </div>
           <div>
             <div className='font-large product-listings-title'>CLASSIC DETAILS</div>
              <div className='padding-top-10'>Stan Smith logos on the tongue and heel tab are paired with three perforated stripes.</div>
           </div>
         </div>
         <div className='font-x-large product-listings-title padding-top-10'>SPECIFICATIONS</div>
         <div>
           <ul>
             <li>Premium soft leather upper</li>
             <li>Lace closure</li>
             <li>Full green leather upper</li>
             <li>Rubber cupsole; Leather lining</li>
             <li>Enjoy the comfort and performance of Ortholite sockliner</li>
             <li>Rubber cupsole</li>
             <li>{'Product color: ' + product.color}</li>
             <li>{'Product code: ' + product.productId}</li>
           </ul>
         </div>
      </div>
    )
  }
}

export default ProductDescription
