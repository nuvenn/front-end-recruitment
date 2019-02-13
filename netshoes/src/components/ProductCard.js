import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: '50px auto',
      maxWidth: '300px',
      minHeight: '200px',  
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});


function ProductCard(props) {
    
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {props.products.map(product => { 
                    return (
                        <Grid item xs={12} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {product.title}
                                    </Typography>
                                    <Typography  color="textSecondary">
                                        {product.style}
                                    </Typography>
                                    <Typography  color="textSecondary">
                                        {`${product.price}$`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Comprar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
  }
  
  ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ProductCard);