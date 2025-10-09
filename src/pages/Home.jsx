import React from 'react';
import Hero from '../components/Hero';
import Facts from '../components/Facts';
import TrendingApp from '../components/TrendingApp';
import { useLoaderData } from 'react-router';
import PageNotFound from './error-page/PageNotFound';
import AppNotFound from './error-page/AppNotFound';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Facts></Facts>
            <TrendingApp data={data}></TrendingApp>
            <PageNotFound></PageNotFound>
            
        </div>
    );
};

export default Home;