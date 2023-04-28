import React, { useContext } from 'react';
import './Login.css'
import { MoneyContext, TkContext } from './Login';

const Jia = () => {
    const ring = useContext(MoneyContext)

    const [money] = useContext(TkContext)
    return (
        <div className='border'>
            <h1>Jia</h1>
            <p>Wife : {ring}</p>
            <p>Balance: {money}</p>
            
        </div>
    );
};

export default Jia;