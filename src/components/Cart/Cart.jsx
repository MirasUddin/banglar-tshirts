import React from 'react';
import Tshirt from '../Tshirts/Tshirt';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
    return (
        <div className='sticky'>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p

                    key={tshirt._id}>
                    {tshirt.name} <button
                    onClick={()=>handleRemoveToCart(tshirt._id)}
                    >X</button></p>)
            }
        </div>
    );
};

export default Cart;