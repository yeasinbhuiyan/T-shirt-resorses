import React, { useContext } from 'react';
import { RingContextApi } from './GrandPa';

const Myself = () => {
   const aungti = useContext(RingContextApi)
    return (
        <div>
            <h2>Myself</h2>
          <p>Spacial : {aungti}</p>
        </div>
    );
};

export default Myself;