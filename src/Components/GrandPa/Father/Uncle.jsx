import React, { useContext, useState } from 'react';
import Cousin from '../Cousin/Cousin';
import { GivenMoney } from '../GrandPa';


const Uncle = () => {
    const [money,setMoney] = useContext(GivenMoney)
   

    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa Money </small></p>
           
            <button onClick={()=> setMoney(money + 100)} className='btn btn-info'>Send 1000 tk</button>
           {/* <p>{money}</p> */}
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabina</Cousin>
            </section>
        </div>
    );
};

export default Uncle;