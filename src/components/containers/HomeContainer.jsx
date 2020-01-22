import React, { Component } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { connect } from 'react-redux'
import { updateFavouriteProduct } from '../homeContainer/actions'
class HomeContainer extends Component {
    render() {
      console.log('props', this.props)
      return(
      <HomeLayout
        favouriteProducts={this.props.favouriteProducts}
        updateFavouriteProduct={this.props.updateFavouriteProduct}
      />
      )
    }
}

function mapStateToProps (state) {
  return {
    favouriteProducts: state.favouriteProducts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateFavouriteProduct: (favouriteProducts) => {
      dispatch(updateFavouriteProduct(favouriteProducts))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)