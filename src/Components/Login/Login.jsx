import React, { createContext, useContext, useState } from 'react';
import './Login.css'
import Ammu from './Ammu';


export const MoneyContext = createContext()

export const TkContext = createContext(0)

const Logina = () => {
    const [money, setMoney] = useState(0)

    return (
        <div className='border text-center text-xl font-semibold'>
            <TkContext.Provider value={[money, setMoney]}>
                <MoneyContext.Provider value='Diamond Ring'>
                    <h1>jamal</h1>
                    <Ammu></Ammu>
                </MoneyContext.Provider>
            </TkContext.Provider>
        </div>
    );
};

export default Logina;