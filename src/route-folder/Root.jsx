import React from 'react';
import Header from '../reuseble-component/Header';
import { Outlet } from 'react-router';
import Footer from '../reuseble-component/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
              <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;