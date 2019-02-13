import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';

const baseUrl = 'http://localhost:3001/products'
const initialState = {
  products: []
}

class App extends Component {

  state = { ...initialState }

  componentWillMount() {
    axios['get'](baseUrl)
        .then(response => {
            this.setState({
              cart: { total: '', list: []},
              products: response.data
            })
        })
  } 

  render() {
    return (
      <div className="App">
        <NavBar />
        <ProductCard products={this.state.products} />
      </div>
    );
  }
}

export default App;
