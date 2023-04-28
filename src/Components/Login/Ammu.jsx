import React, { useContext } from 'react';
import './Login.css'
import Yeasin from './Yeasin';
import Suma from './suma';
import Jia from './Jia';
import { TkContext } from './Login';

const Ammu = () => {
    const [money,setMoney] = useContext(TkContext)
    return (
        <div className='border'>
            <h1>Ammu</h1>
            <p>Account: {money}</p>

            <button onClick={()=>setMoney(money + 1000)} className='btn btn-warning'>Incrise</button>
           <div className='flex items-center justify-center'>
           <Yeasin></Yeasin>
            <Suma></Suma>
            <Jia></Jia>
           </div>
        </div>
    );
};

export default Ammu;