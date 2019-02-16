import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {    
    sumCartTotal(list) {
        let total = 0
        list.map((product) => {
          total = total + product.price
          return total
        })
        return total
    }
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Netshoes
                        {this.sumCartTotal(this.props.cart.list)}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }    
}

export default NavBar;