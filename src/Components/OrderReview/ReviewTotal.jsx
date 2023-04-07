import React from 'react';
// import { toast } from 'react-hot-toast';

const ReviewTotal = ({ saveData }) => {


    let total = 0
    let shipping = 0;
    let delivery = 0;
    for (const result of saveData) {
        total = result.price + total
        shipping = shipping + 40
        delivery = delivery + 70
    }


    let tax = total * 7 / 100
    let grandTotal = total + tax + shipping + delivery
    return (
        <div>

            <div className='text-start bg-slate-300 rounded-xl p-7'>
                <h1 className='text-2xl font-semibold'>Total price : {total}</h1>
                <h3 className='text-xl'> Tax : <span className='font-bold'>{tax}</span> </h3>
                <h3 className='text-xl'> Shipping Charge : <span className='font-bold'>{shipping}</span></h3>
                <h3 className='text-xl'> Delivery Charge : <span className='font-bold'> {delivery} </span></h3>
                <h3 className='mt-5 text-2xl font-bold text-yellow-800'> Grand Total : {grandTotal}</h3>
            </div>

        </div>
    );
};

export default ReviewTotal;