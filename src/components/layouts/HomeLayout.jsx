import React, { Component } from 'react'
import ProductList from '../product/ProductList'
import ProductDetails from '../product/ProductDetails'
import autoBind from 'auto-bind'
import data from '../../../sample-product.json'
import fetchMock from 'fetch-mock'
class HomeLayout extends Component {
  constructor (props) {
    super()
    this.state = {
      selectedProduct: null,
      products: [],
      showSpinner: true
    }
    autoBind(this)
  }
  componentDidMount () {
    fetchMock.get('http://product-data.com/', data, {delay: 2000 }) // mocked delay
    fetch('http://product-data.com')
        .then(response => response.json()) // receives a promise
        .then(data => {
            // console.log('2nd resp', data.items)
          this.setState({products: data.items, showSpinner: false})
        })
        .catch(error => console.log('Error', error))
  }
  updateSelectedProduct (selectedProduct) {
    this.setState({selectedProduct})
  }
  renderProductListings () {
    const { favouriteProducts, updateFavouriteProduct } = this.props
    const { products } = this.state
    return (
      <div className='product-listings'>
        <div>
          <span className='font-xx-large product-listings-title'>MEN'S SHOES</span>
          <span className='light-gray'>[{this.state.products.length}] Products</span>
        </div>
        <br />
        <div className='product-listings-description'>The adidas range of men's shoes has got you covered, if you're striving to be the best or you just want the best fit for your daily life. With iconic designs and high-performance technologies, you can be sure that your shoes won't let you down.</div>
        <br />
        <ProductList
          products={products}
          favouriteProducts={favouriteProducts}
          updateFavouriteProduct={updateFavouriteProduct}
          updateSelectedProduct={this.updateSelectedProduct} />
      </div>
    )
  }
  renderPage () {
    return (this.state.selectedProduct ? <ProductDetails product={this.state.selectedProduct} /> : this.renderProductListings())
  }
  render () {
    return (
      <div className='main-layout'>
        {this.state.showSpinner ? <div>Loading...</div> : this.renderPage()}
      </div>
    )
  }
}

export default HomeLayout
