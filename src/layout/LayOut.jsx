import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Theam from '../Hooks/Theam';

const LayOut = () => {
    const hookProps = Theam();
    return (
        <div data-theme={`${hookProps.templete ? 'dark' : 'light'}`}>
            <NavBar {...hookProps}></NavBar>
           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default LayOut;