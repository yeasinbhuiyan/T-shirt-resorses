import React, { useContext } from 'react';
import Sister from '../Sister';
import Myself from '../Myself';
import Brother from '../Brother';
import { GivenMoney } from '../GrandPa';

const Father = () => {
    const [money,setMoney]= useContext(GivenMoney)
    return (
        <div>
            <h2>Father</h2>

            <button onClick={()=> setMoney(money + 100)}></button>
            <p>Given Grandpa : {money}</p>
     <section className='flex'>
   <Myself></Myself>
            <Brother></Brother>
            <Sister></Sister>
     </section>
        </div>
    );
};

export default Father;