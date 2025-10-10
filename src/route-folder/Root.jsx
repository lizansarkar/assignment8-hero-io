import React, { Suspense } from 'react';
import Header from '../reuseble-component/Header';
import { Outlet } from 'react-router';
import Footer from '../reuseble-component/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
              <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Outlet></Outlet>
              </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;