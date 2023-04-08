import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirts/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-toastify';




const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast(" already added")
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }


    }

    const handleRemoveToCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }


    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;