import React, { useContext } from 'react';
import {RingContextApi } from './GrandPa';

const Brother = () => {
   const aungti = useContext(RingContextApi)
    return (
        <div>
            <h2>Brother</h2>
            <p>{aungti}</p>
          
        </div>
    );
};

export default Brother;