import React, { useState } from 'react';
import useVagetables from '../../hooks/useVagetables';
import Cart from '../Cart/Cart';
import Vagetable from '../Vagetable/Vagetable';
import './Home.css';

const Home = () => {

    // custom hook
    const [vagetables, setVagetables] = useVagetables();

    const [cart, setCart] = useState([]);
    const handleAddToCart = selectedItem => {
        const exist = cart.find(item => item.id === selectedItem.id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert('item already added')
        }
    }

    const handleRemoveFromCart = selectedItem => {
        const restItems = cart.filter(item => item.id !== selectedItem.id);
        setCart(restItems);
    }
    return (
        <div className='home-container'>
            <div className="vagetable-container">
                {
                    vagetables.map((vagetable) => <Vagetable
                        key={vagetable.id}
                        vagetable={vagetable}
                        handleAddToCart={handleAddToCart}
                    ></Vagetable>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;