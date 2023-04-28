import React from 'react';
import { toast } from 'react-hot-toast';

const Cart = ({ singleShirt, handleDelete, cart }) => {
    const { _id, name, price, picture } = singleShirt

    console.log(cart)
    let total = 0
    for (const singleCart of cart) {
        total = total + singleCart.price
        console.log(singleCart.price)


    }




    return (
      
        <div>
            <div className='flex p-3 m-3 md:p-3 pr-12 rounded-2xl items-center shadow-xl'>
                <img className='w-12 h-12 rounded-md' src={picture} alt="" />
               <div className='font-semibold ml-2'>
               <h1 className=''>{name}</h1>
                <p className='text-sm'>price : <span className='font-bold'>{price}</span></p>
               </div>
            </div>
        </div>
    );
};

export default Cart;