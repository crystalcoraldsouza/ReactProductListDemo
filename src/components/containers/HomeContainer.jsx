import React, { Component } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { connect } from 'react-redux'
import { updateFavouriteProduct } from '../homeContainer/actions'
class HomeContainer extends Component {
  render () {
    return (
      <HomeLayout
        favouriteProducts={this.props.favouriteProducts}
        updateFavouriteProduct={this.props.updateFavouriteProduct}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    favouriteProducts: state.homeContainerReducer.favouriteProducts
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
