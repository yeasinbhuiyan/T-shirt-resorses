import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaBeer, FaRegTimesCircle } from 'react-icons/fa';
import './Header.css'
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)


    const [open, setOpen] = useState(false)
    return (
        <div className='navbar w-full'>
            <div>
                <h1 className='font-bold text-2xl'><span className='text-yellow-700'>T</span>-Shirt Shop</h1>
            </div>
            <div className='md:flex hidden'>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/shop'>Shop</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/orderReview'>Order Review</NavLink>
                {
                    !user ? <button className='btn btn-xs'>Logout</button> : <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/login'><button className='btn btn-xs'>Login</button> </NavLink>

                }
            </div>

            <div className='md:hidden'>
                <button onClick={() => setOpen(!open)} className='p-2 rounded-2xl bg-yellow-300'> <FaBars></FaBars> </button>


                {open &&
                    <div className='duration-1000'>
                        <div className=' bg-gray-200 absolute left-0 top-0 p-2 duration-1000 '>
                            <button onClick={() => setOpen(!open)} className='p-2 rounded-2xl left-0 top-0 mb-3'> <FaRegTimesCircle></FaRegTimesCircle></button>

                            <ul>
                                {
                                    user ? <button className='btn btn-xs mb-3 ms-0'>Logout</button> :
                                        <li className='mb-3'>
                                            <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/login'>Login</NavLink>
                                        </li>
                                }

                                <li className='mb-3'>
                                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/'>Home</NavLink>

                                </li>
                                <li className='mb-3'>

                                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/shop'>Shop</NavLink>
                                </li>
                                <li className='mb-3'>
                                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/orderReview'>Order Review</NavLink>
                                </li>







                                {/* <li className='mb-3'>
                   
                    <NavLink className={({ isActive }) => isActive ? 'text-yellow-600 font-semibold' : 'text-gray-600 font-semibold'} to='/grandpa'>grandPa</NavLink>
                    </li> */}
                            </ul>


                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Header;