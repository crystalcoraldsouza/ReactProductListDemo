import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HomeContainer from './components/containers/HomeContainer'
import '../css/common.css'
import '../css/productListings.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from  'redux-thunk'
import { rootReducer } from './rootReducer'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
class App extends Component {
    render() {
      return (<HomeContainer />)
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
