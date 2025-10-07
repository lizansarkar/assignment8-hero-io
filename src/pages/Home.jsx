import React from 'react';
import Hero from '../components/Hero';
import Facts from '../components/Facts';
import TrendingApp from '../components/TrendingApp';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Facts></Facts>
            <TrendingApp></TrendingApp>
        </div>
    );
};

export default Home;