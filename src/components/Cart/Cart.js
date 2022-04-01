import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {

    //conditional rendering options
    //1. element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please add atleast one item</p>
    } else if (cart.length === 1) {
        command = <p>Please Add More</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    // 2.ternary operator
    // 3. shortcut operator &&
    // 4. shorcut operator || 

    return (
        <div>
            <h2>Cart Items</h2>

            {
                cart.map((item) => <p key={item.id}>{item.name}
                    <button onClick={() => handleRemoveFromCart(item)}>x</button>
                </p>)
            }

            {cart.length === 0 || <p>cart pura khali na</p>}
            {cart.length === 3 && <p>khali 3 ta sobji kinba ?!!</p>}
            {command}
            {cart.length !== 4 ? <p>
                keep adding
            </p> : <button>remove all</button>}

        </div>
    );
};

export default Cart;