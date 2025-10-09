import React from 'react';
import Hero from '../components/Hero';
import Facts from '../components/Facts';
import TrendingApp from '../components/TrendingApp';
import { useLoaderData } from 'react-router';
import PageNotFound from './error-page/PageNotFound';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Facts></Facts>
            <TrendingApp data={data}></TrendingApp>
        </div>
    );
};

export default Home;