import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <div className='flex'>
            <Cousin>Abir</Cousin>
            <Cousin>Nibir</Cousin>
            </div>
        </div>
    );
};

export default Aunty;