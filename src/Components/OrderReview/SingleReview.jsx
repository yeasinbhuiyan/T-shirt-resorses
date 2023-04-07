import React from 'react';
import './SingleReview.css'
const SingleReview = ({singleReview,handleDelete}) => {
    const {picture,_id,price,name} = singleReview
    return (
        <div>
            <div className='flex items-center review-cart shadow-2xl m-5 '>
             
              <img  className='w-20 h-20 rounded-xl p-2' src={picture} alt="" />
             <div className='flex-grow'>
             <h1 className='font-semibold text-xl'>Name {name}</h1>
                <p>Price: <span className='font-bold text-xl text-yellow-800'>{price}</span></p>
             </div>
           
              <div className='m-3'>
                <button onClick={()=>handleDelete(singleReview._id)}>x</button>
              </div>
            </div>
        
            
        </div>
    );
};

export default SingleReview;