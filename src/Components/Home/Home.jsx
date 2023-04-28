import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default Home;