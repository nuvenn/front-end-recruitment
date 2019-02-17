import React, {Component} from 'react';
import If from '../utils/If'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '380px',
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

  deleteIcon() {
    return (
        <SvgIcon>
            <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
        </SvgIcon>
    )
  } 
  
  getCartList() {
    return this.props.cart.list.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem button>
            <ListItemText primary={item.title} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => this.props.removeFromCart(index)} aria-label="Delete">
                {this.deleteIcon()}
              </IconButton>
            </ListItemSecondaryAction>
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