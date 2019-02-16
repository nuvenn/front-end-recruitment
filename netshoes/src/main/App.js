import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import CartDetail from '../components/CartDetail';

const baseUrl = 'http://localhost:3001/products'

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      products: [],
      cart: { list: [], open: true }
    }
    this.addToCart = this.addToCart.bind(this)
    this.openCartDetail = this.openCartDetail.bind(this)
  }

  componentWillMount() {
    axios['get'](baseUrl)
        .then(response => {
            this.setState({
              products: response.data,
              cart: { list: [] }
            })
        })
  }

  addToCart(product) {
    this.setState((state, props) => ({
      cart: {
        list: state.cart.list.concat(product)
      }
    }))
  }

  openCartDetail() {
    this.setState((state, props) => ({
      cart: {
        open: !state.cart.open,
        list: state.cart.list
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar cart={this.state.cart} openCartDetail={this.openCartDetail} />
        <CartDetail cart={this.state.cart} />
        <ProductCard products={this.state.products} addToCart={this.addToCart} />
      </div>
    )
  }
}

export default App
