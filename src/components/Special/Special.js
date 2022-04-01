import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>gift: <small>{ring}</small></p>
        </div>
    );
};

export default Special;