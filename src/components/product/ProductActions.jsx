import React, { Component } from 'react'
import Dropdown from '../common/Dropdown'
import Button from '../common/Button'
class ProductActions extends Component {
    render() {
      return (
        <div className='product-details'>
            <div className='display-flex padding-top-10'>
                <Dropdown selectClass={'width-65 font-bold'} placeholder={'SELECT YOUR SIZE'} size='5' options={['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']} />
                <Dropdown selectClass={'width-30 margin-left-auto font-bold'} options={['1', '2', '3', '4']} />
            </div>
            <div className='display-flex padding-top-10'>
                <Button name='button' buttonClass={'buttonClass'} value={<div className='display-flex'><div className='width-75'>Add To Bag</div><i className="fas fa-arrow-right arrow-icon"></i></div>} />
                <Button name='button' buttonClass={'buttonClass'} value={<i className="fas fa-heart"></i>} />

            </div>
        </div>
      )
    }
}

export default ProductActions