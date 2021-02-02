import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onAddProduct, onRemoveProduct } from '../reducers/actions/shoppingCartActions';
import { Product } from '../types/types';

interface ShopItemProps {
    item: Product
}

const useStyles = makeStyles({
    itemImage: {
        height: '250px'
    },
    container: {
        width: '100%'
    }
});

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const addProductToCart = (product: Product) => {
        dispatch(onAddProduct(product))
    }

    const removeProductFromCart = (product: Product) => {
        dispatch(onRemoveProduct(product))
    }

    return (
        <Card className={classes.container}>
            <CardActionArea>
                <CardMedia
                    className={classes.itemImage}
                    image={item.imageUrl}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addProductToCart(item)}>
                    Add to cart
                </Button>
                <Button size="small" color="primary" onClick={() => removeProductFromCart(item)}>
                    Remove from cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ShopItem
