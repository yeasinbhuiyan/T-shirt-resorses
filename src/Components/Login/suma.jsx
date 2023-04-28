import React, { useContext } from 'react';

import './Login.css'
import { MoneyContext, TkContext } from './Login';
const Suma = () => {
    const ring = useContext(MoneyContext)

    const [money] = useContext(TkContext)
    return (
        <div className='border'> 
            <h1>Suma</h1>
             <p>Gift : {ring}</p>
             <p>Given : {money}</p>
            
        </div>
    );
};

export default Suma;