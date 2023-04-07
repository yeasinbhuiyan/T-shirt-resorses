import React from 'react';
import './Tshirt.css'

const Tshirt = ({ shirt,handleAddBtn }) => {
    const { picture, name, price } = shirt

    return (
        <div className='t-shirt-cart'>
            <img src={picture} alt="" />

            <div>
              <h1 className='font-semibold text-xl'>Name: {name}</h1>
                <p className='font-bold'>Price: {price}</p>
              </div>
              <div className='text-center'>
                <button onClick={()=>handleAddBtn(shirt)} className='btn btn-info lowercase'>Order</button>

            </div>


        </div>
    );
};

export default Tshirt;