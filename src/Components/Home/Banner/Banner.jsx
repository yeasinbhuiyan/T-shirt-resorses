import React, { useState } from 'react';
import './Banner.css'
import { Link, useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Banner = () => {
    const shirts = useLoaderData()
    const [allShirt, setAllShirt] = useState(shirts)
    console.log(allShirt)
    return (
        <div>
            <div className='banner-section '>
                <div data-aos="fade-up" className='my-auto text-center mx-auto md:py-24'>


                    <h1 className='text-7xl text-gray-400'>The Best Fabrics<br /> Are From Us Always</h1>

                    <p className='text-gray-200 px-10 p-color  text-center my-5 text-xl'>A T-shirt or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.</p>

                    <div data-aos-duration="1000" data-aos-easing="ease" data-aos="fade-down">
                        <Link to='/shop' className='btn btn-xs py-1'> See T-Shirt Item</Link>

                    </div>
                </div>

            </div>
            <div className='chart-section my-10'>




                {/* <ResponsiveContainer width="100%" height="100%"> */}

                {/* </ResponsiveContainer> */}

                <div className='text-center mt-10 text-3xl font-semibold'>
                    <h1 >Top <span className='font-bold'>Six</span> Selling <span className='text-yellow-700'>T</span>-Shirt</h1>
                </div>


                <div className='md:hidden mt-10'>
                    <ResponsiveContainer width="100%" height="100%">
                        <div className='w-full h-full'>
                            <LineChart className='mx-auto' width={300} height={100} data={allShirt}>
                                <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                                <Tooltip></Tooltip>
                                <XAxis dataKey="name"></XAxis>
                                <YAxis></YAxis>

                            </LineChart>
                        </div>
                    </ResponsiveContainer>
                </div>


                <div className='md:flex mt-5  hidden'>

                    <LineChart className='mx-auto' width={700} height={500} data={allShirt}>

                        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                        <Tooltip></Tooltip>
                        <XAxis dataKey="name"></XAxis>
                        <YAxis></YAxis>

                    </LineChart>
                </div>






            </div>
        </div>
    );
};

export default Banner;