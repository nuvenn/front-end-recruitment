import React, {Component} from 'react';
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

  render() {
    return (
      <List component="nav" className={this.props.classes.root}>
        {this.getCartList()}
      </List>
    )
  }
}

CartDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartDetail);