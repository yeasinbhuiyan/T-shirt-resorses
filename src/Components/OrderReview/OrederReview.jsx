import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleReview from './SingleReview';
import ReviewTotal from './ReviewTotal';
import { addLocal, removeLocal } from '../Main.jsx/LocalStorage';

const OrederReview = () => {
    const loadData = useLoaderData()

    const [saveData, setSaveData] = useState(loadData)


    const handleDelete = (id) => {


       const deleteBtn = saveData.filter(ld => ld._id != id)
       setSaveData(deleteBtn)
        removeLocal(id)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 my-10'>
            <div className=''>
                {
                    saveData.map(singleReview => <SingleReview handleDelete={handleDelete} singleReview={singleReview}></SingleReview>)
                }
            </div>
            <div className='text-center m-4'>
                <ReviewTotal  saveData={saveData}></ReviewTotal>
            </div>

        </div>
    );
};

export default OrederReview;