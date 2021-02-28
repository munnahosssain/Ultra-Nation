import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPopulation = totalPopulation + cart[i].population;
    }

    return (
        <div>
            <h3>This is cart :{cart.length}</h3>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;