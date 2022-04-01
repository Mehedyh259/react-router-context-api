import React from 'react';
import './Vagetable.css'
const Vagetable = ({ handleAddToCart, vagetable }) => {


    const { id, name, price, img } = vagetable;
    return (
        <div className='vagetable'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(vagetable)}>Add To Cart</button>
        </div>
    );
};

export default Vagetable;