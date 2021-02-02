import React from 'react';
import { Grid } from "@material-ui/core";
import { Product } from '../types/types';
import ShopItem from './ShopItem';
import { useSelector } from 'react-redux';
import { ShoppingCartState } from '../reducers/shoppingCartReducer';


const AppContainer = () => {
    const products = useSelector<ShoppingCartState, ShoppingCartState["products"]>(state=>state.products);

    const testItems: Product[] = [
        ({
            id: 'asd123',
            name: 'Tesla Model 3',
            description: 'Another gem of Tesla blablablabla',
            price: 40000,
            imageUrl: 'https://autoreview.ru/images/Article/1596/Article_159682_860_575.jpg'
        }),
        ({
            id: 'asd124',
            name: 'Tesla Model X',
            description: 'Another gem of Tesla blablablabla',
            price: 60000,
            imageUrl: 'https://3dnews.ru/assets/external/illustrations/2020/02/16/1003794/tesla2.jpg'
        }),
        ({
            id: 'asd125',
            name: 'Tesla Model S',
            description: 'Another gem of Tesla blablablabla',
            price: 50000,
            imageUrl: 'https://grand.photo/wp-content/uploads/2020/04/tesla-model-s-i-model-x-poluchayut-besplatnoe-uskorenie-i.jpg'
        }),
        ({
            id: 'asd126',
            name: 'Tesla Model Y',
            description: 'Another gem of Tesla blablablabla',
            price: 45000,
            imageUrl: 'https://images.drive.ru/i/0/5c8b4bd8ec05c4fb0b000003.jpg'
        }),
        ({
            id: 'asd127',
            name: 'Tesla Model X',
            description: 'Another gem of Tesla blablablabla',
            price: 60000,
            imageUrl: 'https://3dnews.ru/assets/external/illustrations/2020/02/16/1003794/tesla2.jpg'
        }),
        ({
            id: 'asd128',
            name: 'Tesla Model S',
            description: 'Another gem of Tesla blablablabla',
            price: 50000,
            imageUrl: 'https://grand.photo/wp-content/uploads/2020/04/tesla-model-s-i-model-x-poluchayut-besplatnoe-uskorenie-i.jpg'
        })
    ]


    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {testItems.map(item => (
                    <Grid key={item.id} item xs={12} sm={6} lg={4}>
                        <Grid container justify="center">
                            <ShopItem key={item.id} item={item} />
                        </Grid>
                    </Grid>
                ))}

            </Grid>
            {products.map(item => {
                return(<p>{item.name}</p>)
            })}
        </>
    )
}

export default AppContainer;