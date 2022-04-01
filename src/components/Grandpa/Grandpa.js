import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';


export const RingContext = createContext('ring');


const Grandpa = () => {


    const [house, setHouse] = useState(1);

    const ornament = 'Dimond-ring';

    const handleBuyAHouse = () => {
        setHouse(house + 1);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>Total House: {house}</p>
                <div style={{ display: 'flex', border: 'none' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;