import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-gray-800  to-gray-500'>
            <section className="p-5 m-top footer-bg">

                <div className="grid grid-cols-1 lg:grid-cols-4   p-5">

                    <div className="mt-5">
                        <h1 className="font-bold text-gray-100"><Link>SHOP</Link></h1>
                        <ul className="">
                            <li className="mt-3 text-gray-400"><Link>Plans</Link></li>
                            <li className="mt-2 text-gray-400"><Link>T-Shirts</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Vagitable Food Item</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Tourist T-shirts Item</Link></li>
                            <li className="mt-2 text-gray-400"><Link>PayGo Plan</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Add a Line</Link></li>
                        </ul>



                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-gray-100"><Link>SERVICE FEATURES</Link></h1>
                        <ul className="ul">
                            <li className="mt-3 text-gray-400"><Link>Coverage</Link></li>
                            <li className="mt-2 text-gray-400"><Link>5G</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Features</Link></li>
                            <li className="mt-2 text-gray-400"><Link>uTalk</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Call China</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Call Mexico</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Call India</Link></li>
                        </ul>



                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-gray-100"><Link>ABOUT T-Shirt</Link></h1>
                        <ul className="ul">
                            <li className="mt-2 text-gray-400"><Link>Refer A Friend</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Become A Retailer</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Become A Partner</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Testimonials</Link></li>
                            <li className="mt-2 text-gray-400"><Link>Careers</Link></li>
                            <li className="mt-2 text-gray-400"><Link>In The News</Link></li>
                            <li className="mt-2 text-gray-400"><Link>FAQ</Link></li>
                            <li className="mt-2 text-gray-400"><Link>T-Shirts Order Status</Link></li>
                        </ul>



                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-gray-100">Subscribe to our newsletter below.</h1>
                        <div className="flex  mt-3">
                     

                            <input className="rounded p-2 text-gray-300" placeholder="Email" type="text" />

                            <button className=" bg-gradient-to-r from-gray-950 to-gray-600 p-3 rounded-lg font-semibold text-white">Sign Up</button>
                        </div>
                        <div className="flex mt-3">




                            

                            <div className='p-2'>
                            <FaDiscord></FaDiscord>

                            </div>
                            <div className='p-2'>
                            <FaInstagram></FaInstagram>

                            </div>

                           

                            <div className='p-2'>
                            <FaTwitter ></FaTwitter>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </footer>
    );
};

export default Footer;