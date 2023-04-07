import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div>
                <h1 className='font-bold text-2xl'><span className='text-yellow-700'>T</span>-Shirt Shop</h1>
            </div>
            <div>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/'>Home</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/shop'>Shop</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/orderReview'>Order Review</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/login'>Login</Link>
                <Link className={({ isActive }) => isActive ? 'text-yellow-600' : 'text-white'} to='/grandpa'>grandPa</Link>
            </div>
        </div>
    );
};

export default Header;