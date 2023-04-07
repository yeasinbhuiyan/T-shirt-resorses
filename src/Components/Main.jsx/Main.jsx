import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt';
import './Main.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import { addLocal, getLocal } from './LocalStorage';


const Main = () => {
    const shirts = useLoaderData()
    
    const [cart, setCart] = useState([])
    

    const handleAddBtn = (tshirt) => {
        const fs = cart.find(cart => cart._id == tshirt._id)

        if (fs) {
            toast('already added this product')
        }
        else {

            setCart([...cart, tshirt])
            addLocal(tshirt._id)
        }

    }

    useEffect(() => {
        const get = getLocal()
        console.log(get)
        const savedCart = []
        for (const id in get) {
            // console.log(cart)
            const addedTshirt = shirts.find(ca => ca._id == id)
            console.log(addedTshirt)
            if (addedTshirt) {
                console.log(addedTshirt)
                savedCart.push(addedTshirt)
            }
        }

        setCart(savedCart)

    }, [])


    let massage;
    if (cart.length == 0) {
        massage = <p className='text-center font-semibold text-xl'>please give Some product</p>
    }

    const handleDelete = (_id) => {

        console.log(_id)
        const deleteBtn = cart.filter(cf => cf._id != _id)
        setCart(deleteBtn)
    }
    return (
        <div className='main-container'>
            <div className='grid md:grid-cols-3 gap-6 m-4'>
                {
                    shirts.map(shirt => <Tshirt handleAddBtn={handleAddBtn} shirt={shirt}></Tshirt>)
                }

            </div>
            <div className=''>
                {massage}
                <div className='sticky top-0'>
                    {
                        cart.map(singleShirt => <Cart cart={cart} massage={massage} handleDelete={handleDelete} singleShirt={singleShirt}></Cart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Main;