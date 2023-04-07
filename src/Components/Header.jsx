import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [open ,setOpen ] = useState(false)
    return (
        <div className='navbar w-full'>
            <div>
                <h1 className='font-bold text-2xl'><span className='text-yellow-700'>T</span>-Shirt Shop</h1>
            </div>
            <div className='md:flex hidden'>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/'>Home</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/shop'>Shop</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/orderReview'>Order Review</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/login'>Login</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/grandpa'>grandPa</Link>
            </div>

            <div className='md:hidden'>
            <button onClick={()=>setOpen(!open)} className='p-2 rounded-2xl bg-yellow-300'> open </button>

        
            {open && 
                <div className='duration-1000'>
                    <div className='bg-white absolute left-1 top-1 p-2 duration-1000 w-20 '>
                    <button onClick={()=>setOpen(!open)} className='p-2 rounded-2xl bg-red-300'>cancel</button>

                  <ul>

                    <li>
                    <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/'>Home</Link>

                    </li>
                    <li>
                        
                  <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/shop'>Shop</Link>
                    </li>
                    <li>
                    <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/orderReview'>Order Review</Link>
                    </li>
                    <li>
                    <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/login'>Login</Link>
                    </li>
                    <li>
                   
                    <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/grandpa'>grandPa</Link>
                    </li>
                  </ul>
 

                    </div>
                </div>
            }
        
            </div>
        </div>
    );
};

export default Header;