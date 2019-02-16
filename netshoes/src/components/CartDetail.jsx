import React, {Component} from 'react';
import If from '../utils/If'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    maxHeight: '140px',
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    right: '15px',
    overflowY: 'scroll'
  },
});

class CartDetail extends Component {

  constructor(props) {
    super(props);
    this.getValorCompra = this.getValorCompra.bind(this)
  }
  
  getCartList() {
    return this.props.cart.list.map(item => {
      return (
        <React.Fragment key={item.id}>
          <ListItem button>
            <ListItemText primary={item.title} />
          </ListItem>
          <Divider />
        </React.Fragment>
      )
    })
  }

  getValorCompra() {
    let total = 0
    this.props.cart.list.map(function(item) { 
      total = total + item.price
      return total
    })
    return total.toFixed(2)
  }

  render() {
    return (
      <If test={!this.props.cart.open}>
        <List component="nav" className={this.props.classes.root}>
          <If test={this.props.cart.list.length > 0}>
            <ListItem button>
              <ListItemText primary="Seu carrinho está vazio" />
            </ListItem>
            <Divider />
          </If>
          {this.getCartList()}
          <If test={!this.props.cart.list.length > 0}>
            <ListItem button>
              <ListItemText primary={`Total:  ${this.getValorCompra()}$`} />
            </ListItem>
            <Divider />
          </If>
        </List>
      </If>
    )
  }
}

CartDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartDetail);