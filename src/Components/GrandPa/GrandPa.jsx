import React, { createContext, useState } from 'react';
import Father from './Father/Father';
import Uncle from './Father/Uncle';
import Aunty from './Father/Aunty';
import './GrandPa.css'
import Myself from './Myself';
import Brother from './Brother';



export const RingContextApi = createContext('gold')
export const GivenMoney = createContext(0)

const GrandPa = () => {
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa text-center'>
            <h2>GrandPa</h2>
            <p>Has Money:{money}</p>

            <GivenMoney.Provider value={[money, setMoney]}>
                <RingContextApi.Provider value='Diamond'>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>



                    </section>

                </RingContextApi.Provider>
            </GivenMoney.Provider>

        </div>
    );
};

export default GrandPa;




/***
 * 1 . create context 
 * 2.creat a provider and pass a value
 * 3. use useContext recive the value
 * 
 */


/**
 * 
 * 
 * 
 * 1 amra prothime function er bahire ekta context creat korbo tarpor jey jey elemnet er bitor pathabo 
 * segulu ke amra provider er maddome rap kore dibo ebon provider er bitor oy value baa jey nam ta pathabo seta dibo tarpor amra jee elemnet ba componenet e lagbe sekhan theke amra
 * use context er diye tarbitor jeeey name context create korsi sei name dibo tarpor oy variable k amra set korbo 
 *
 * 
 * prothome amra context create korbo tarpor amra oy context ke provider er maddome rap kore value jeee useState er maddome
 * declar korbo take dynamic babe linkbo value bitor tarpor amra jekhane jekhane lagbe sekhane sekhane amra useCondtext
 * er maddome tarbitor jey context create korsi tarname lekeh bam pashe state er array lekhe sekheane onlick er maddome joog kore set kore dibo 
*/
